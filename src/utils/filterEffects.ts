import { tailwindEffects, TailwindEffect } from "@/data/tailwindEffects";

export function filterEffects(path: string): TailwindEffect[] {
  if (path === "/") {
    return tailwindEffects;
  }

  const category = path.slice(1); // Remove leading slash
  return tailwindEffects.filter((effect) =>
    effect.category.startsWith(category)
  );
}
