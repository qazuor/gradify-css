import { generateId } from "@/lib/gradient-utils";
import type { GradientConfig } from "@/types/gradient.types";

export interface PresetCategory {
  key: string;
  presets: GradientConfig[];
}

export const presetCategories: PresetCategory[] = [
  {
    key: "sunset",
    presets: [
      {
        type: "linear",
        angle: 135,
        radialShape: "circle",
        radialPosition: { x: 50, y: 50 },
        colorStops: [
          { id: generateId(), color: "#ff512f", position: 0 },
          { id: generateId(), color: "#f09819", position: 100 },
        ],
      },
      {
        type: "linear",
        angle: 180,
        radialShape: "circle",
        radialPosition: { x: 50, y: 50 },
        colorStops: [
          { id: generateId(), color: "#fc4a1a", position: 0 },
          { id: generateId(), color: "#f7b733", position: 100 },
        ],
      },
      {
        type: "linear",
        angle: 90,
        radialShape: "circle",
        radialPosition: { x: 50, y: 50 },
        colorStops: [
          { id: generateId(), color: "#ee0979", position: 0 },
          { id: generateId(), color: "#ff6a00", position: 100 },
        ],
      },
      {
        type: "radial",
        angle: 0,
        radialShape: "circle",
        radialPosition: { x: 50, y: 100 },
        colorStops: [
          { id: generateId(), color: "#ffecd2", position: 0 },
          { id: generateId(), color: "#fcb69f", position: 100 },
        ],
      },
    ],
  },
  {
    key: "ocean",
    presets: [
      {
        type: "linear",
        angle: 135,
        radialShape: "circle",
        radialPosition: { x: 50, y: 50 },
        colorStops: [
          { id: generateId(), color: "#667eea", position: 0 },
          { id: generateId(), color: "#764ba2", position: 100 },
        ],
      },
      {
        type: "linear",
        angle: 90,
        radialShape: "circle",
        radialPosition: { x: 50, y: 50 },
        colorStops: [
          { id: generateId(), color: "#00c6fb", position: 0 },
          { id: generateId(), color: "#005bea", position: 100 },
        ],
      },
      {
        type: "linear",
        angle: 180,
        radialShape: "circle",
        radialPosition: { x: 50, y: 50 },
        colorStops: [
          { id: generateId(), color: "#0093e9", position: 0 },
          { id: generateId(), color: "#80d0c7", position: 100 },
        ],
      },
      {
        type: "radial",
        angle: 0,
        radialShape: "ellipse",
        radialPosition: { x: 50, y: 50 },
        colorStops: [
          { id: generateId(), color: "#a8edea", position: 0 },
          { id: generateId(), color: "#fed6e3", position: 100 },
        ],
      },
    ],
  },
  {
    key: "nature",
    presets: [
      {
        type: "linear",
        angle: 135,
        radialShape: "circle",
        radialPosition: { x: 50, y: 50 },
        colorStops: [
          { id: generateId(), color: "#11998e", position: 0 },
          { id: generateId(), color: "#38ef7d", position: 100 },
        ],
      },
      {
        type: "linear",
        angle: 90,
        radialShape: "circle",
        radialPosition: { x: 50, y: 50 },
        colorStops: [
          { id: generateId(), color: "#56ab2f", position: 0 },
          { id: generateId(), color: "#a8e063", position: 100 },
        ],
      },
      {
        type: "linear",
        angle: 45,
        radialShape: "circle",
        radialPosition: { x: 50, y: 50 },
        colorStops: [
          { id: generateId(), color: "#134e5e", position: 0 },
          { id: generateId(), color: "#71b280", position: 100 },
        ],
      },
      {
        type: "conic",
        angle: 0,
        radialShape: "circle",
        radialPosition: { x: 50, y: 50 },
        colorStops: [
          { id: generateId(), color: "#c6ffdd", position: 0 },
          { id: generateId(), color: "#fbd786", position: 50 },
          { id: generateId(), color: "#f7797d", position: 100 },
        ],
      },
    ],
  },
  {
    key: "neon",
    presets: [
      {
        type: "linear",
        angle: 135,
        radialShape: "circle",
        radialPosition: { x: 50, y: 50 },
        colorStops: [
          { id: generateId(), color: "#f953c6", position: 0 },
          { id: generateId(), color: "#b91d73", position: 100 },
        ],
      },
      {
        type: "linear",
        angle: 90,
        radialShape: "circle",
        radialPosition: { x: 50, y: 50 },
        colorStops: [
          { id: generateId(), color: "#8e2de2", position: 0 },
          { id: generateId(), color: "#4a00e0", position: 100 },
        ],
      },
      {
        type: "linear",
        angle: 45,
        radialShape: "circle",
        radialPosition: { x: 50, y: 50 },
        colorStops: [
          { id: generateId(), color: "#00f260", position: 0 },
          { id: generateId(), color: "#0575e6", position: 100 },
        ],
      },
      {
        type: "conic",
        angle: 45,
        radialShape: "circle",
        radialPosition: { x: 50, y: 50 },
        colorStops: [
          { id: generateId(), color: "#ff0099", position: 0 },
          { id: generateId(), color: "#493240", position: 50 },
          { id: generateId(), color: "#ff0099", position: 100 },
        ],
      },
    ],
  },
];
