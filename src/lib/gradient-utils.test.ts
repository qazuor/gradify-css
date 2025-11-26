import { describe, expect, it } from "vitest";

import type { GradientConfig } from "@/types/gradient.types";

import {
  generateFullCSS,
  generateGradientCSS,
  generateId,
  getDefaultConfig,
  getRandomColor,
  getRandomConfig,
} from "./gradient-utils";

describe("generateGradientCSS", () => {
  it("generates linear gradient CSS", () => {
    const config: GradientConfig = {
      type: "linear",
      angle: 90,
      radialShape: "circle",
      radialPosition: { x: 50, y: 50 },
      colorStops: [
        { id: "1", color: "#ff0000", position: 0 },
        { id: "2", color: "#0000ff", position: 100 },
      ],
    };

    const css = generateGradientCSS(config);
    expect(css).toBe("linear-gradient(90deg, #ff0000 0%, #0000ff 100%)");
  });

  it("generates radial gradient CSS", () => {
    const config: GradientConfig = {
      type: "radial",
      angle: 0,
      radialShape: "circle",
      radialPosition: { x: 50, y: 50 },
      colorStops: [
        { id: "1", color: "#ff0000", position: 0 },
        { id: "2", color: "#0000ff", position: 100 },
      ],
    };

    const css = generateGradientCSS(config);
    expect(css).toBe("radial-gradient(circle at 50% 50%, #ff0000 0%, #0000ff 100%)");
  });

  it("generates conic gradient CSS", () => {
    const config: GradientConfig = {
      type: "conic",
      angle: 45,
      radialShape: "circle",
      radialPosition: { x: 25, y: 75 },
      colorStops: [
        { id: "1", color: "#ff0000", position: 0 },
        { id: "2", color: "#00ff00", position: 50 },
        { id: "3", color: "#0000ff", position: 100 },
      ],
    };

    const css = generateGradientCSS(config);
    expect(css).toBe(
      "conic-gradient(from 45deg at 25% 75%, #ff0000 0%, #00ff00 50%, #0000ff 100%)"
    );
  });

  it("sorts color stops by position", () => {
    const config: GradientConfig = {
      type: "linear",
      angle: 90,
      radialShape: "circle",
      radialPosition: { x: 50, y: 50 },
      colorStops: [
        { id: "1", color: "#0000ff", position: 100 },
        { id: "2", color: "#ff0000", position: 0 },
      ],
    };

    const css = generateGradientCSS(config);
    expect(css).toBe("linear-gradient(90deg, #ff0000 0%, #0000ff 100%)");
  });
});

describe("generateFullCSS", () => {
  it("wraps gradient in background property", () => {
    const config: GradientConfig = {
      type: "linear",
      angle: 90,
      radialShape: "circle",
      radialPosition: { x: 50, y: 50 },
      colorStops: [
        { id: "1", color: "#ff0000", position: 0 },
        { id: "2", color: "#0000ff", position: 100 },
      ],
    };

    const css = generateFullCSS(config);
    expect(css).toBe("background: linear-gradient(90deg, #ff0000 0%, #0000ff 100%);");
  });
});

describe("generateId", () => {
  it("generates unique IDs", () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).not.toBe(id2);
  });

  it("generates string IDs", () => {
    const id = generateId();
    expect(typeof id).toBe("string");
    expect(id.length).toBeGreaterThan(0);
  });
});

describe("getDefaultConfig", () => {
  it("returns valid default config", () => {
    const config = getDefaultConfig();
    expect(config.type).toBe("linear");
    expect(config.angle).toBe(90);
    expect(config.colorStops.length).toBe(2);
  });
});

describe("getRandomColor", () => {
  it("returns valid hex color", () => {
    const color = getRandomColor();
    expect(color).toMatch(/^#[A-F0-9]{6}$/);
  });
});

describe("getRandomConfig", () => {
  it("returns valid config", () => {
    const config = getRandomConfig();
    expect(["linear", "radial", "conic"]).toContain(config.type);
    expect(config.angle).toBeGreaterThanOrEqual(0);
    expect(config.angle).toBeLessThanOrEqual(360);
    expect(config.colorStops.length).toBeGreaterThanOrEqual(2);
  });
});
