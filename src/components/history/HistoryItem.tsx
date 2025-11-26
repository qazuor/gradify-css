import { Check, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

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
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8"
                onClick={() => onApply(item)}
              >
                <Check className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("history.apply")}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="destructive"
                size="icon"
                className="h-8 w-8"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(item.id);
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
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
