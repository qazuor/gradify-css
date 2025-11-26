import { useTranslation } from "react-i18next";
import { CheckCheck } from "@/components/animate-ui/icons/check-check";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { Trash2 } from "@/components/animate-ui/icons/trash-2";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { HistoryItem as HistoryItemType } from "@/types/gradient.types";

interface HistoryItemProps {
  item: HistoryItemType;
  onApply: (item: HistoryItemType) => void;
  onDelete: (id: string) => void;
}

export function HistoryItem({ item, onApply, onDelete }: HistoryItemProps) {
  const { t } = useTranslation();

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={() => onApply(item)}
        className="block aspect-video w-full cursor-pointer rounded-lg border shadow-sm transition-all hover:scale-105 hover:shadow-md"
        style={{ background: item.css }}
        aria-label={t("history.apply")}
      />
      <div className="absolute inset-0 flex items-center justify-center gap-2 rounded-lg bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <AnimateIcon animateOnHover asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => onApply(item)}
                >
                  <CheckCheck size={16} />
                </Button>
              </AnimateIcon>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("history.apply")}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <AnimateIcon animateOnHover asChild>
                <Button
                  variant="destructive"
                  size="icon"
                  className="h-8 w-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(item.id);
                  }}
                >
                  <Trash2 size={16} />
                </Button>
              </AnimateIcon>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("history.delete")}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
