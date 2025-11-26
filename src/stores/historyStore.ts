import { create } from "zustand";
import { persist } from "zustand/middleware";

import { generateId } from "@/lib/gradient-utils";
import type { GradientConfig, HistoryItem } from "@/types/gradient.types";

const MAX_HISTORY_ITEMS = 20;

interface HistoryStore {
  items: HistoryItem[];
  addItem: (config: GradientConfig, css: string) => void;
  removeItem: (id: string) => void;
  clearHistory: () => void;
}

export const useHistoryStore = create<HistoryStore>()(
  persist(
    (set) => ({
      items: [],

      addItem: (config, css) =>
        set((state) => {
          const newItem: HistoryItem = {
            id: generateId(),
            config,
            css,
            createdAt: Date.now(),
          };

          const existingIndex = state.items.findIndex((item) => item.css === css);

          if (existingIndex !== -1) {
            return state;
          }

          const newItems = [newItem, ...state.items].slice(0, MAX_HISTORY_ITEMS);
          return { items: newItems };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      clearHistory: () => set({ items: [] }),
    }),
    {
      name: "gradify-history",
    }
  )
);
