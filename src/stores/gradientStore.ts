import { create } from "zustand";

import {
  generateFullCSS,
  generateGradientCSS,
  generateId,
  getDefaultConfig,
  getRandomColor,
  getRandomConfig,
} from "@/lib/gradient-utils";
import type { ColorStop, GradientConfig, GradientType, RadialShape } from "@/types/gradient.types";

interface GradientStore {
  config: GradientConfig;
  css: string;
  fullCss: string;

  setType: (type: GradientType) => void;
  setAngle: (angle: number) => void;
  setRadialShape: (shape: RadialShape) => void;
  setRadialPosition: (x: number, y: number) => void;

  addColorStop: () => void;
  removeColorStop: (id: string) => void;
  updateColorStop: (id: string, updates: Partial<Omit<ColorStop, "id">>) => void;

  reset: () => void;
  randomize: () => void;
  applyConfig: (config: GradientConfig) => void;
}

function updateCss(config: GradientConfig) {
  return {
    css: generateGradientCSS(config),
    fullCss: generateFullCSS(config),
  };
}

export const useGradientStore = create<GradientStore>((set) => {
  const defaultConfig = getDefaultConfig();

  return {
    config: defaultConfig,
    css: generateGradientCSS(defaultConfig),
    fullCss: generateFullCSS(defaultConfig),

    setType: (type) =>
      set((state) => {
        const config = { ...state.config, type };
        return { config, ...updateCss(config) };
      }),

    setAngle: (angle) =>
      set((state) => {
        const config = { ...state.config, angle };
        return { config, ...updateCss(config) };
      }),

    setRadialShape: (radialShape) =>
      set((state) => {
        const config = { ...state.config, radialShape };
        return { config, ...updateCss(config) };
      }),

    setRadialPosition: (x, y) =>
      set((state) => {
        const config = { ...state.config, radialPosition: { x, y } };
        return { config, ...updateCss(config) };
      }),

    addColorStop: () =>
      set((state) => {
        const newStop: ColorStop = {
          id: generateId(),
          color: getRandomColor(),
          position: 50,
        };
        const config = {
          ...state.config,
          colorStops: [...state.config.colorStops, newStop],
        };
        return { config, ...updateCss(config) };
      }),

    removeColorStop: (id) =>
      set((state) => {
        if (state.config.colorStops.length <= 2) return state;
        const config = {
          ...state.config,
          colorStops: state.config.colorStops.filter((stop) => stop.id !== id),
        };
        return { config, ...updateCss(config) };
      }),

    updateColorStop: (id, updates) =>
      set((state) => {
        const config = {
          ...state.config,
          colorStops: state.config.colorStops.map((stop) =>
            stop.id === id ? { ...stop, ...updates } : stop
          ),
        };
        return { config, ...updateCss(config) };
      }),

    reset: () => {
      const config = getDefaultConfig();
      set({ config, ...updateCss(config) });
    },

    randomize: () => {
      const config = getRandomConfig();
      set({ config, ...updateCss(config) });
    },

    applyConfig: (config) => set({ config, ...updateCss(config) }),
  };
});
