"use client";

import { EmptyState } from "@/components/EmptyState";
import { useSearch } from "@/contexts/SearchContext";
import { TailwindEffectCard } from "@/components/TailwindEffectCard";
import { TailwindEffect } from "@/data/tailwindEffects/types";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEffects.map((effect, index) => (
          <TailwindEffectCard
            key={index}
            name={effect.name}
            lightCode={effect.lightCode}
            darkCode={effect.darkCode}
            description={effect.description}
            tailwindConfig={effect.tailwindConfig}
          />
        ))}
      </div>
    </>
  );
}
