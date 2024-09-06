import { TailwindEffect } from "./types";

export function filterEffects(
  effects: TailwindEffect[],
  categoryKey: string,
  searchTerm: string
): TailwindEffect[] {
  return effects.filter(
    (effect) =>
      (effect.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        effect.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (categoryKey === "all" || effect.category === categoryKey)
  );
}
