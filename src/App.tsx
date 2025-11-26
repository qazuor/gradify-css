import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/animate/tabs";
import { ClipboardList } from "@/components/animate-ui/icons/clipboard-list";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { Lightbulb } from "@/components/animate-ui/icons/lightbulb";
import { SlidersHorizontal } from "@/components/animate-ui/icons/sliders-horizontal";
import { useTranslation } from "react-i18next";

import { GradientControls } from "@/components/gradient/GradientControls";
import { GradientPreview } from "@/components/gradient/GradientPreview";
import { PresetsPanel } from "@/components/gradient/PresetsPanel";
import { HistoryPanel } from "@/components/history/HistoryPanel";
import { MainLayout } from "@/components/layout/MainLayout";
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
        <TabsList className="mb-6 w-full grid grid-cols-3">
          <AnimateIcon animateOnHover asChild>
            <TabsTrigger value="creator" className="gap-2">
              <SlidersHorizontal size={16} />
              <span className="hidden sm:inline">{t("tabs.creator")}</span>
            </TabsTrigger>
          </AnimateIcon>
          <AnimateIcon animateOnHover asChild>
            <TabsTrigger value="history" className="gap-2">
              <ClipboardList size={16} />
              <span className="hidden sm:inline">{t("tabs.history")}</span>
            </TabsTrigger>
          </AnimateIcon>
          <AnimateIcon animateOnHover asChild>
            <TabsTrigger value="inspiration" className="gap-2">
              <Lightbulb size={16} />
              <span className="hidden sm:inline">{t("tabs.inspiration")}</span>
            </TabsTrigger>
          </AnimateIcon>
        </TabsList>

        <TabsContents>
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
        </TabsContents>
      </Tabs>
    </MainLayout>
  );
}

export default App;
