"use client";

import { useState, useEffect } from "react";
import { SidebarNav } from "@/components/SidebarNav";
import { Navbar } from "@/components/Navbar";
import { TailwindEffectCard } from "@/components/TailwindEffectCard";
import { PageHeader } from "@/components/PageHeader";
import { tailwindEffects, TailwindEffect } from "@/data/tailwindEffects";

export default function Component() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEffects, setFilteredEffects] =
    useState<TailwindEffect[]>(tailwindEffects);

  const filters = [
    { category: "General", items: [{ name: "All", path: "/" }] },
    {
      category: "Components",
      items: [
        { name: "Text", path: "/components/text" },
        { name: "Button", path: "/components/button" },
        { name: "Form", path: "/components/form" },
        { name: "Card", path: "/components/card" },
        { name: "Modal", path: "/components/modal" },
        { name: "Table", path: "/components/table" },
        { name: "List", path: "/components/list" },
      ],
    },
    {
      category: "Layouts",
      items: [
        { name: "Grid", path: "/layouts/grid" },
        { name: "Flexbox", path: "/layouts/flexbox" },
        { name: "Background", path: "/layouts/background" },
      ],
    },
    {
      category: "Interactions",
      items: [
        { name: "Animation", path: "/interactions/animation" },
        { name: "Transition", path: "/interactions/transition" },
        { name: "Navigation", path: "/interactions/navigation" },
      ],
    },
  ];

  useEffect(() => {
    const filtered = tailwindEffects.filter((effect: TailwindEffect) => {
      const matchesSearch =
        effect.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        effect.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeFilter === "all" ||
        effect.category === activeFilter.toLowerCase();
      return matchesSearch && matchesCategory;
    });
    setFilteredEffects(filtered);
  }, [searchTerm, activeFilter]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 container mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-8 py-8">
          <SidebarNav
            filters={filters}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <main className="flex-1">
            <PageHeader
              title={`${
                activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)
              } Effects`}
              onSearch={setSearchTerm}
            />
            <div className="grid gap-6 md:grid-cols-2">
              {filteredEffects.map((effect: TailwindEffect, index: number) => (
                <TailwindEffectCard
                  key={index}
                  name={effect.name}
                  description={effect.description}
                  preview={effect.preview}
                  code={effect.code}
                  author={effect.author}
                  twitter={effect.twitter}
                  website={effect.website}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
