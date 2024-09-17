"use client";

import { EmptyState } from "@/components/EmptyState";
import { useSearch } from "@/contexts/SearchContext";
import { TailwindEffectCard } from "@/components/TailwindEffectCard";
import { TailwindEffect } from "@/models/tailwindEffect/types";

interface EffectsGridProps {
  effects: TailwindEffect[];
}

export function EffectsGrid({ effects = [] }: EffectsGridProps) {
  const { searchTerm } = useSearch();

  const filteredEffects = effects.filter((effect) =>
    effect.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {filteredEffects.length === 0 && <EmptyState />}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6">
        {[...filteredEffects].map((effect, index) => (
          <TailwindEffectCard key={index} {...effect} />
        ))}
      </div>
    </>
  );
}
