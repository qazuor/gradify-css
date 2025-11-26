import { useTranslation } from "react-i18next";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useGradientStore } from "@/stores/gradientStore";

export function AngleSelector() {
  const { t } = useTranslation();
  const angle = useGradientStore((state) => state.config.angle);
  const type = useGradientStore((state) => state.config.type);
  const setAngle = useGradientStore((state) => state.setAngle);

  if (type === "radial") return null;

  const handleSliderChange = (value: number[]) => {
    setAngle(value[0]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value, 10);
    if (!Number.isNaN(value) && value >= 0 && value <= 360) {
      setAngle(value);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label>{t("gradient.angle")}</Label>
        <div className="flex items-center gap-1">
          <Input
            type="number"
            min={0}
            max={360}
            value={angle}
            onChange={handleInputChange}
            className="h-8 w-16 text-center"
          />
          <span className="text-muted-foreground text-sm">°</span>
        </div>
      </div>
      <Slider value={[angle]} onValueChange={handleSliderChange} max={360} step={1} />
    </div>
  );
}
