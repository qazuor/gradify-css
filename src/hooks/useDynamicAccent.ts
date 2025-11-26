import { useEffect } from "react";

import { useGradientStore } from "@/stores/gradientStore";

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function rgbToOklch(r: number, g: number, b: number): { l: number; c: number; h: number } {
  // Normalize RGB to 0-1
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  // Convert to linear RGB
  const toLinear = (c: number) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);

  const rLin = toLinear(rNorm);
  const gLin = toLinear(gNorm);
  const bLin = toLinear(bNorm);

  // Convert to OKLab
  const l_ = 0.4122214708 * rLin + 0.5363325363 * gLin + 0.0514459929 * bLin;
  const m_ = 0.2119034982 * rLin + 0.6806995451 * gLin + 0.1073969566 * bLin;
  const s_ = 0.0883024619 * rLin + 0.2817188376 * gLin + 0.6299787005 * bLin;

  const l_3 = Math.cbrt(l_);
  const m_3 = Math.cbrt(m_);
  const s_3 = Math.cbrt(s_);

  const L = 0.2104542553 * l_3 + 0.793617785 * m_3 - 0.0040720468 * s_3;
  const a = 1.9779984951 * l_3 - 2.428592205 * m_3 + 0.4505937099 * s_3;
  const bVal = 0.0259040371 * l_3 + 0.7827717662 * m_3 - 0.808675766 * s_3;

  // Convert to OKLCH
  const c = Math.sqrt(a * a + bVal * bVal);
  let h = Math.atan2(bVal, a) * (180 / Math.PI);
  if (h < 0) h += 360;

  return { l: L, c, h };
}

export function useDynamicAccent() {
  const colorStops = useGradientStore((state) => state.config.colorStops);

  useEffect(() => {
    if (colorStops.length === 0) return;

    // Get the first color stop as the accent
    const primaryColor = colorStops[0].color;
    const rgb = hexToRgb(primaryColor);

    if (!rgb) return;

    const oklch = rgbToOklch(rgb.r, rgb.g, rgb.b);

    // Apply dynamic accent colors
    const root = document.documentElement;

    // For light mode: use the color as-is but ensure good contrast
    const lightL = Math.min(oklch.l, 0.55); // Darken for better contrast on light bg
    const lightC = Math.min(oklch.c, 0.25);

    // For dark mode: lighten the color
    const darkL = Math.max(oklch.l, 0.65);
    const darkC = Math.min(oklch.c, 0.22);

    root.style.setProperty("--dynamic-accent-light", `oklch(${lightL} ${lightC} ${oklch.h})`);
    root.style.setProperty("--dynamic-accent-dark", `oklch(${darkL} ${darkC} ${oklch.h})`);
    root.style.setProperty("--dynamic-accent-h", `${oklch.h}`);

    return () => {
      root.style.removeProperty("--dynamic-accent-light");
      root.style.removeProperty("--dynamic-accent-dark");
      root.style.removeProperty("--dynamic-accent-h");
    };
  }, [colorStops]);
}
