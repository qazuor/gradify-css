import { Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { useGradientStore } from "@/stores/gradientStore";
import { useHistoryStore } from "@/stores/historyStore";
import { useUIStore } from "@/stores/uiStore";
import type { HistoryItem as HistoryItemType } from "@/types/gradient.types";

import { HistoryItem } from "./HistoryItem";

export function HistoryPanel() {
  const { t } = useTranslation();
  const items = useHistoryStore((state) => state.items);
  const removeItem = useHistoryStore((state) => state.removeItem);
  const clearHistory = useHistoryStore((state) => state.clearHistory);
  const applyConfig = useGradientStore((state) => state.applyConfig);
  const setActiveTab = useUIStore((state) => state.setActiveTab);

  const handleApply = (item: HistoryItemType) => {
    applyConfig(item.config);
    setActiveTab("creator");
  };

  const handleDelete = (id: string) => {
    removeItem(id);
  };

  return (
    <div className="space-y-4">
      {items.length > 0 && (
        <div className="flex justify-end">
          <Button variant="outline" size="sm" onClick={clearHistory}>
            <Trash2 className="mr-1 h-4 w-4" />
            {t("history.clear")}
          </Button>
        </div>
      )}

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <p className="text-muted-foreground max-w-md text-center">{t("history.empty")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {items.map((item) => (
            <HistoryItem key={item.id} item={item} onApply={handleApply} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
