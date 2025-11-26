import { useTranslation } from "react-i18next";

import { CopyButton } from "@/components/common/CopyButton";
import { Label } from "@/components/ui/label";
import { useGradientStore } from "@/stores/gradientStore";
import { useHistoryStore } from "@/stores/historyStore";

export function CSSOutput() {
  const { t } = useTranslation();
  const fullCss = useGradientStore((state) => state.fullCss);
  const config = useGradientStore((state) => state.config);
  const css = useGradientStore((state) => state.css);
  const addToHistory = useHistoryStore((state) => state.addItem);

  const handleCopy = () => {
    addToHistory(config, css);
  };

  return (
    <div className="space-y-3">
      <Label>{t("css.output")}</Label>
      <pre className="bg-muted overflow-x-auto whitespace-pre-wrap break-all rounded-lg p-3 font-mono text-xs">
        {fullCss}
      </pre>
      <CopyButton text={fullCss} onCopy={handleCopy} />
    </div>
  );
}
