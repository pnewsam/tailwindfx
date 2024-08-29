"use client";

import { SidebarNav } from "@/components/SidebarNav";
import { Navbar } from "@/components/Navbar";
import { TailwindEffectCard } from "@/components/TailwindEffectCard";
import { PageHeader } from "@/components/PageHeader";
import { filterEffects } from "@/utils/filterEffects";
import { SearchProvider } from "@/contexts/SearchContext";
import { ClientSideEffects } from "@/components/ClientSideEffects";

export default function CategoryPage({
  params,
}: {
  params: { categories: string[] };
}) {
  const path = `/${params.categories.join("/")}`;
  const effects = filterEffects(path);
  const title =
    params.categories.length > 0
      ? params.categories[params.categories.length - 1]
      : "All";

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

  return (
    <SearchProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 container mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-8 py-8">
            <SidebarNav filters={filters} currentPath={path} />
            <main className="flex-1">
              <PageHeader
                title={`${
                  title.charAt(0).toUpperCase() + title.slice(1)
                } Effects`}
              />
              <ClientSideEffects effects={effects} />
            </main>
          </div>
        </div>
      </div>
    </SearchProvider>
  );
}
