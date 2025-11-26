import { History, Lightbulb, Palette } from "lucide-react";
import { useTranslation } from "react-i18next";

import { GradientControls } from "@/components/gradient/GradientControls";
import { GradientPreview } from "@/components/gradient/GradientPreview";
import { PresetsPanel } from "@/components/gradient/PresetsPanel";
import { HistoryPanel } from "@/components/history/HistoryPanel";
import { MainLayout } from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { TabValue } from "@/stores/uiStore";
import { useUIStore } from "@/stores/uiStore";

function App() {
  const { t } = useTranslation();
  const activeTab = useUIStore((state) => state.activeTab);
  const setActiveTab = useUIStore((state) => state.setActiveTab);

  return (
    <MainLayout>
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabValue)}
        className="w-full"
      >
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="creator" className="gap-2">
            <Palette className="h-4 w-4" />
            <span className="hidden sm:inline">{t("tabs.creator")}</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="gap-2">
            <History className="h-4 w-4" />
            <span className="hidden sm:inline">{t("tabs.history")}</span>
          </TabsTrigger>
          <TabsTrigger value="inspiration" className="gap-2">
            <Lightbulb className="h-4 w-4" />
            <span className="hidden sm:inline">{t("tabs.inspiration")}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="creator">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <GradientPreview />
            </div>
            <div>
              <GradientControls />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <HistoryPanel />
        </TabsContent>

        <TabsContent value="inspiration">
          <PresetsPanel />
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
}

export default App;
