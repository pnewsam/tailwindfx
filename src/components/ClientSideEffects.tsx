"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useSearch } from "@/contexts/SearchContext";
import { TailwindEffectCard } from "@/components/TailwindEffectCard";
import { TailwindEffect } from "@/data/tailwindEffects";
import { useEffect, useState } from "react";
import { fetchTailwindEffects } from "@/queries/tailwindEffects";

interface ClientSideEffectsProps {
  categoryKey: string;
}

const filterEffects = (
  effects: TailwindEffect[],
  searchTerm: string,
  mode: string
) => {
  return effects.filter(
    (effect) =>
      (effect.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        effect.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (mode === "both" || effect.mode === mode || effect.mode === "both")
  );
};

export function ClientSideEffects({ categoryKey }: ClientSideEffectsProps) {
  const { searchTerm, mode } = useSearch();
  const [isLoading, setIsLoading] = useState(true);
  const [effects, setEffects] = useState<TailwindEffect[]>([]);
  const [filteredEffects, setFilteredEffects] = useState<TailwindEffect[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchTailwindEffects(categoryKey)
      .then(setEffects)
      .finally(() => setIsLoading(false));
  }, [categoryKey]);

  useEffect(() => {
    const filtered = filterEffects(effects, searchTerm, mode);
    setFilteredEffects(filtered);
  }, [searchTerm, mode, effects]);

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
              author={effect.author}
              twitter={effect.twitter}
              website={effect.website}
              mode={effect.mode}
            />
          ))}
    </div>
  );
}
