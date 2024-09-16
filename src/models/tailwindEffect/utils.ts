import { TailwindEffect } from "./types";

const filterSearch = (searchTerm: string) => {
  return (effect: TailwindEffect) =>
    effect.name.toLowerCase().includes(searchTerm.toLowerCase());
};

const filterCategory = (categoryKey: string) => {
  if (categoryKey === "all") return () => true;

  if (categoryKey === "layouts")
    return (effect: TailwindEffect) => effect.category.includes("layouts");
  if (categoryKey === "components")
    return (effect: TailwindEffect) => effect.category.includes("components");

  return (effect: TailwindEffect) => effect.category === categoryKey;
};

export function filterEffects(
  effects: TailwindEffect[],
  categoryKey: string,
  searchTerm: string
): TailwindEffect[] {
  return effects.filter(
    (effect) =>
      filterSearch(searchTerm)(effect) && filterCategory(categoryKey)(effect)
  );
}
