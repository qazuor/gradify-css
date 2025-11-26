import { useTranslation } from "react-i18next";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { MessageSquareDiff } from "@/components/animate-ui/icons/message-square-diff";
import { Trash2 } from "@/components/animate-ui/icons/trash-2";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useGradientStore } from "@/stores/gradientStore";

export function ColorStopEditor() {
  const { t } = useTranslation();
  const colorStops = useGradientStore((state) => state.config.colorStops);
  const addColorStop = useGradientStore((state) => state.addColorStop);
  const removeColorStop = useGradientStore((state) => state.removeColorStop);
  const updateColorStop = useGradientStore((state) => state.updateColorStop);

  const canRemove = colorStops.length > 2;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <Label className="shrink-0">{t("gradient.colorStops")}</Label>
        <AnimateIcon animateOnHover asChild>
          <Button variant="outline" size="sm" onClick={addColorStop}>
            <MessageSquareDiff size={16} className="sm:mr-1" />
            <span className="hidden sm:inline">{t("gradient.addStop")}</span>
          </Button>
        </AnimateIcon>
      </div>

      <div className="space-y-4">
        {colorStops.map((stop) => (
          <div key={stop.id} className="space-y-2">
            {/* Color inputs row */}
            <div className="flex items-center gap-2">
              <Input
                type="color"
                value={stop.color}
                onChange={(e) => updateColorStop(stop.id, { color: e.target.value })}
                className="h-8 w-10 shrink-0 p-1"
              />
              <Input
                type="text"
                value={stop.color}
                onChange={(e) => updateColorStop(stop.id, { color: e.target.value })}
                className="h-8 w-20 shrink-0 font-mono text-xs"
              />
              <Slider
                value={[stop.position]}
                onValueChange={(value) => updateColorStop(stop.id, { position: value[0] })}
                max={100}
                step={1}
                className="min-w-0 flex-1"
              />
              <span className="text-muted-foreground w-9 shrink-0 text-right text-sm">
                {stop.position}%
              </span>
              <AnimateIcon animateOnHover asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeColorStop(stop.id)}
                  disabled={!canRemove}
                  className="h-8 w-8 shrink-0"
                >
                  <Trash2 size={16} />
                </Button>
              </AnimateIcon>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
