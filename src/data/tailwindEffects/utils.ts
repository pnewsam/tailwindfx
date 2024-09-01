import { TailwindEffect } from "./types";

export function filterEffects(
  effects: TailwindEffect[],
  categoryKey: string,
  searchTerm: string,
  mode: string
): TailwindEffect[] {
  return effects.filter(
    (effect) =>
      (effect.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        effect.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (mode === "both" || effect.mode === mode || effect.mode === "both") &&
      (categoryKey === "all" || effect.category === categoryKey)
  );
}
