import { useTranslation } from "react-i18next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGradientStore } from "@/stores/gradientStore";

export function GradientPreview() {
  const { t } = useTranslation();
  const css = useGradientStore((state) => state.css);

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{t("gradient.preview")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="aspect-video w-full rounded-lg border shadow-inner"
          style={{ background: css }}
        />
      </CardContent>
    </Card>
  );
}
