"use client";

import { CircleSlash2 } from "lucide-react";
import { useSearch } from "@/contexts/SearchContext";
import { TailwindEffectCard } from "@/components/TailwindEffectCard";
import { TailwindEffect } from "@/data/tailwindEffects/types";
import { FullCodeModal } from "./FullCodeModal";

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
      {effects.length === 0 && (
        <div className="w-full flex flex-col items-center justify-center py-12 px-6 min-h-[340px] bg-muted border rounded-lg">
          <CircleSlash2 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            No effects found
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter to find what you&apos;re looking
            for.
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEffects.map((effect, index) => (
          <TailwindEffectCard
            key={index}
            name={effect.name}
            lightCode={effect.lightCode}
            darkCode={effect.darkCode}
            description={effect.description}
          />
        ))}
      </div>
    </>
  );
}
