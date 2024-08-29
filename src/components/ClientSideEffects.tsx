"use client";

import { useSearch } from "@/contexts/SearchContext";
import { TailwindEffectCard } from "@/components/TailwindEffectCard";
import { TailwindEffect } from "@/data/tailwindEffects";
import { useEffect, useState } from "react";

interface ClientSideEffectsProps {
  effects: TailwindEffect[];
}

export function ClientSideEffects({ effects }: ClientSideEffectsProps) {
  const { searchTerm, mode } = useSearch();
  const [filteredEffects, setFilteredEffects] = useState(effects);

  useEffect(() => {
    const filtered = effects.filter(
      (effect) =>
        (effect.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          effect.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) &&
        (mode === "both" || effect.mode === mode || effect.mode === "both")
    );
    setFilteredEffects(filtered);
  }, [searchTerm, mode, effects]);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {filteredEffects.map((effect, index) => (
        <TailwindEffectCard
          key={index}
          name={effect.name}
          description={effect.description}
          preview={effect.preview}
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
