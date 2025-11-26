import { useTranslation } from "react-i18next";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGradientStore } from "@/stores/gradientStore";
import type { GradientType } from "@/types/gradient.types";

export function GradientTypeSelector() {
  const { t } = useTranslation();
  const type = useGradientStore((state) => state.config.type);
  const setType = useGradientStore((state) => state.setType);

  const handleChange = (value: string) => {
    setType(value as GradientType);
  };

  return (
    <Tabs value={type} onValueChange={handleChange} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="linear">{t("gradient.linear")}</TabsTrigger>
        <TabsTrigger value="radial">{t("gradient.radial")}</TabsTrigger>
        <TabsTrigger value="conic">{t("gradient.conic")}</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
