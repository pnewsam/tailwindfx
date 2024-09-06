"use client";

import { CircleSlash2 } from "lucide-react";
import { useSearch } from "@/contexts/SearchContext";
import { TailwindEffectCard } from "@/components/TailwindEffectCard";
import { TailwindEffect } from "@/data/tailwindEffects/types";
import { useEffect, useState } from "react";
import { fetchTailwindEffects } from "@/data/tailwindEffects/queries";
import { useTailwindEffectsStore } from "@/data/tailwindEffects/store";
import { filterEffects } from "@/data/tailwindEffects/utils";
import { Skeleton } from "./ui/skeleton";

interface ClientSideEffectsProps {
  categoryKey: string;
}

export function ClientSideEffects({ categoryKey }: ClientSideEffectsProps) {
  const { searchTerm } = useSearch();

  const effects = [] as TailwindEffect[];

  return (
    <>
      {effects.length === 0 && (
        <div className="w-full flex flex-col items-center justify-center py-12 px-6 min-h-[340px] bg-gray-100 dark:bg-gray-800 rounded-lg">
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
        {effects.map((effect, index) => (
          <TailwindEffectCard
            key={index}
            name={effect.name}
            code={effect.code}
            // description={effect.description}
            // category={effect.category}
          />
        ))}
      </div>
    </>
  );
}
