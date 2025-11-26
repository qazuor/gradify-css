import { z } from "zod";

export const gradientTypeSchema = z.enum(["linear", "radial", "conic"]);

export const radialShapeSchema = z.enum(["circle", "ellipse"]);

export const positionSchema = z.object({
  x: z.number().min(0).max(100),
  y: z.number().min(0).max(100),
});

export const colorStopSchema = z.object({
  id: z.string(),
  color: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
  position: z.number().min(0).max(100),
});

export const gradientConfigSchema = z.object({
  type: gradientTypeSchema,
  angle: z.number().min(0).max(360),
  radialShape: radialShapeSchema,
  radialPosition: positionSchema,
  colorStops: z.array(colorStopSchema).min(2),
});

export const historyItemSchema = z.object({
  id: z.string(),
  config: gradientConfigSchema,
  css: z.string(),
  createdAt: z.number(),
});
