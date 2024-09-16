import { create } from "zustand";
import { TailwindEffect } from "@/models/tailwindEffect/types";

interface TailwindEffectsState {
  effects: TailwindEffect[];
  setEffects: (effects: TailwindEffect[]) => void;
  effectsByCategory: { [key: string]: TailwindEffect[] };
  setEffectsByCategory: (effectsByCategory: {
    [key: string]: TailwindEffect[];
  }) => void;
}

export const useTailwindEffectsStore = create<TailwindEffectsState>((set) => ({
  effects: [],
  effectsByCategory: {},
  setEffects: (effects: TailwindEffect[]) => set({ effects }),
  setEffectsByCategory: (effectsByCategory: {
    [key: string]: TailwindEffect[];
  }) => set({ effectsByCategory }),
}));
