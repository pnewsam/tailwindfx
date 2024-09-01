"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useSearch } from "@/contexts/SearchContext";
import { TailwindEffectCard } from "@/components/TailwindEffectCard";
import { TailwindEffect } from "@/data/tailwindEffects/types";
import { useEffect, useState } from "react";
import { fetchTailwindEffects } from "@/data/tailwindEffects/queries";
import { useTailwindEffectsStore } from "@/data/tailwindEffects/store";
import { filterEffects } from "@/data/tailwindEffects/utils";

interface ClientSideEffectsProps {
  categoryKey: string;
}

export function ClientSideEffects({ categoryKey }: ClientSideEffectsProps) {
  const { searchTerm, mode } = useSearch();
  const [isLoading, setIsLoading] = useState(true);

  const effects = useTailwindEffectsStore((state) => state.effects);
  const [filteredEffects, setFilteredEffects] = useState<TailwindEffect[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchTailwindEffects(categoryKey).finally(() => setIsLoading(false));
  }, [categoryKey]);

  useEffect(() => {
    const filtered = filterEffects(effects, categoryKey, searchTerm, mode);
    setFilteredEffects(filtered);
  }, [searchTerm, mode, effects, categoryKey]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {isLoading
        ? [...Array(6)].map((_, index) => (
            <Skeleton key={index} className="w-full h-[340px] border" />
          ))
        : filteredEffects.map((effect, index) => (
            <TailwindEffectCard
              key={index}
              name={effect.name}
              description={effect.description}
              code={effect.code}
              mode={effect.mode}
              category={effect.category}
            />
          ))}
    </div>
  );
}
