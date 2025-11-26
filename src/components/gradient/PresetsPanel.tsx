import { useTranslation } from "react-i18next";

import { presetCategories } from "@/data/gradient-presets";
import { generateGradientCSS } from "@/lib/gradient-utils";
import { useGradientStore } from "@/stores/gradientStore";
import { useUIStore } from "@/stores/uiStore";
import type { GradientConfig } from "@/types/gradient.types";

export function PresetsPanel() {
  const { t } = useTranslation();
  const applyConfig = useGradientStore((state) => state.applyConfig);
  const setActiveTab = useUIStore((state) => state.setActiveTab);

  const handleApply = (config: GradientConfig) => {
    applyConfig(config);
    setActiveTab("creator");
  };

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground text-center text-sm">{t("inspiration.description")}</p>

      <div className="space-y-8">
        {presetCategories.map((category) => (
          <div key={category.key} className="space-y-3">
            <h3 className="text-lg font-semibold">{t(`inspiration.${category.key}`)}</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {category.presets.map((preset, index) => (
                <button
                  key={`${category.key}-${index}`}
                  type="button"
                  onClick={() => handleApply(preset)}
                  className="aspect-video w-full rounded-lg border shadow-sm transition-all hover:scale-105 hover:shadow-md"
                  style={{ background: generateGradientCSS(preset) }}
                  aria-label={`${t(`inspiration.${category.key}`)} preset ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
