export type GradientType = "linear" | "radial" | "conic";

export type RadialShape = "circle" | "ellipse";

export interface Position {
  x: number;
  y: number;
}

export interface ColorStop {
  id: string;
  color: string;
  position: number;
}

export interface GradientConfig {
  type: GradientType;
  angle: number;
  radialShape: RadialShape;
  radialPosition: Position;
  colorStops: ColorStop[];
}

export interface HistoryItem {
  id: string;
  config: GradientConfig;
  css: string;
  createdAt: number;
}
