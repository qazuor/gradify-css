import type { ColorStop, GradientConfig } from "@/types/gradient.types";

export function generateGradientCSS(config: GradientConfig): string {
  const colorStopsString = formatColorStops(config.colorStops);

  switch (config.type) {
    case "linear":
      return `linear-gradient(${config.angle}deg, ${colorStopsString})`;

    case "radial": {
      const { radialShape, radialPosition } = config;
      const position = `${radialPosition.x}% ${radialPosition.y}%`;
      return `radial-gradient(${radialShape} at ${position}, ${colorStopsString})`;
    }

    case "conic": {
      const { angle, radialPosition } = config;
      const position = `${radialPosition.x}% ${radialPosition.y}%`;
      return `conic-gradient(from ${angle}deg at ${position}, ${colorStopsString})`;
    }

    default:
      return "";
  }
}

function formatColorStops(colorStops: ColorStop[]): string {
  const sorted = [...colorStops].sort((a, b) => a.position - b.position);
  return sorted.map((stop) => `${stop.color} ${stop.position}%`).join(", ");
}

export function generateFullCSS(config: GradientConfig): string {
  const gradient = generateGradientCSS(config);
  return `background: ${gradient};`;
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

export function getDefaultConfig(): GradientConfig {
  return {
    type: "linear",
    angle: 90,
    radialShape: "circle",
    radialPosition: { x: 50, y: 50 },
    colorStops: [
      { id: generateId(), color: "#667eea", position: 0 },
      { id: generateId(), color: "#764ba2", position: 100 },
    ],
  };
}

export function getRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function getRandomConfig(): GradientConfig {
  const types: GradientConfig["type"][] = ["linear", "radial", "conic"];
  const shapes: GradientConfig["radialShape"][] = ["circle", "ellipse"];

  const numStops = Math.floor(Math.random() * 3) + 2;
  const colorStops: ColorStop[] = [];

  for (let i = 0; i < numStops; i++) {
    colorStops.push({
      id: generateId(),
      color: getRandomColor(),
      position: Math.round((i / (numStops - 1)) * 100),
    });
  }

  return {
    type: types[Math.floor(Math.random() * types.length)],
    angle: Math.floor(Math.random() * 360),
    radialShape: shapes[Math.floor(Math.random() * shapes.length)],
    radialPosition: {
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
    },
    colorStops,
  };
}
