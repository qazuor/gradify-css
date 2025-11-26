import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { LoaderPinwheel } from "@/components/animate-ui/icons/loader-pinwheel";
import { RotateCcw } from "@/components/animate-ui/icons/rotate-ccw";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGradientStore } from "@/stores/gradientStore";

import { AngleSelector } from "./AngleSelector";
import { ColorStopEditor } from "./ColorStopEditor";
import { CSSOutput } from "./CSSOutput";
import { GradientTypeSelector } from "./GradientTypeSelector";
import { RadialControls } from "./RadialControls";

export function GradientControls() {
  const { t } = useTranslation();
  const reset = useGradientStore((state) => state.reset);
  const randomize = useGradientStore((state) => state.randomize);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="text-lg">{t("gradient.type")}</CardTitle>
          <div className="flex gap-2">
            <AnimateIcon animateOnHover asChild>
              <Button variant="outline" size="sm" onClick={randomize}>
                <LoaderPinwheel size={16} className="sm:mr-1" />
                <span className="hidden sm:inline">{t("actions.randomize")}</span>
              </Button>
            </AnimateIcon>
            <AnimateIcon animateOnHover asChild>
              <Button variant="outline" size="sm" onClick={reset}>
                <RotateCcw size={16} className="sm:mr-1" />
                <span className="hidden sm:inline">{t("actions.reset")}</span>
              </Button>
            </AnimateIcon>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <GradientTypeSelector />

        <Separator />

        <AngleSelector />
        <RadialControls />

        <Separator />

        <ColorStopEditor />

        <Separator />

        <CSSOutput />
      </CardContent>
    </Card>
  );
}
