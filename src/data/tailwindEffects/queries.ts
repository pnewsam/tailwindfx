import { TailwindEffect } from "./types";
import { useTailwindEffectsStore } from "./store";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const EFFECTS_URL = `${backendUrl}/effects`;

export const fetchTailwindEffects = async () => {
  const response = await fetch(EFFECTS_URL);
  const data = await response.json();
  const tailwindEffectsStore = useTailwindEffectsStore.getState();
  tailwindEffectsStore.setEffects(data as TailwindEffect[]);
  tailwindEffectsStore.setEffectsByCategory(
    data.reduce(
      (acc: { [key: string]: TailwindEffect[] }, effect: TailwindEffect) => {
        const category = effect.category.split("/")[0];
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(effect);
        return acc;
      },
      {}
    )
  );
  return data;
};

export const submitTailwindEffect = async (effect: TailwindEffect) => {
  const response = await fetch(EFFECTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(effect),
  });
  const data = await response.json();
  return data;
};
