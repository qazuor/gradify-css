import { useTranslation } from "react-i18next";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGradientStore } from "@/stores/gradientStore";
import type { RadialShape } from "@/types/gradient.types";

export function RadialControls() {
  const { t } = useTranslation();
  const type = useGradientStore((state) => state.config.type);
  const radialShape = useGradientStore((state) => state.config.radialShape);
  const radialPosition = useGradientStore((state) => state.config.radialPosition);
  const setRadialShape = useGradientStore((state) => state.setRadialShape);
  const setRadialPosition = useGradientStore((state) => state.setRadialPosition);

  if (type === "linear") return null;

  const handleShapeChange = (value: string) => {
    setRadialShape(value as RadialShape);
  };

  const handleXChange = (value: number[]) => {
    setRadialPosition(value[0], radialPosition.y);
  };

  const handleYChange = (value: number[]) => {
    setRadialPosition(radialPosition.x, value[0]);
  };

  return (
    <div className="space-y-4">
      {type === "radial" && (
        <div className="space-y-2">
          <Label>{t("gradient.shape")}</Label>
          <Tabs value={radialShape} onValueChange={handleShapeChange} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="circle">{t("gradient.circle")}</TabsTrigger>
              <TabsTrigger value="ellipse">{t("gradient.ellipse")}</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      )}

      <div className="space-y-3">
        <Label>{t("gradient.position")}</Label>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground w-4 text-sm">X</span>
            <Slider value={[radialPosition.x]} onValueChange={handleXChange} max={100} step={1} />
            <span className="text-muted-foreground w-8 text-sm">{radialPosition.x}%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground w-4 text-sm">Y</span>
            <Slider value={[radialPosition.y]} onValueChange={handleYChange} max={100} step={1} />
            <span className="text-muted-foreground w-8 text-sm">{radialPosition.y}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
