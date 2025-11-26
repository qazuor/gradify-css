import { create } from "zustand";

export type TabValue = "creator" | "history" | "inspiration";

interface UIStore {
  activeTab: TabValue;
  setActiveTab: (tab: TabValue) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  activeTab: "creator",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
