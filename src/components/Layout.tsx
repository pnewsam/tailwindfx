import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { SidebarNav } from "@/components/SidebarNav";
import { SearchProvider } from "@/contexts/SearchContext";
import { ThemeProvider } from "@/components/ThemeProvider";

interface LayoutProps {
  children: ReactNode;
  currentPath: string;
}

const filters = [
  { category: "General", items: [{ name: "All", path: "/" }] },
  {
    category: "Components",
    items: [
      { name: "Text", path: "/components/text" },
      { name: "Button", path: "/components/button" },
      { name: "Card", path: "/components/card" },
      { name: "Input", path: "/components/input" },
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
];

export function Layout({ children, currentPath }: LayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SearchProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar filters={filters} />
          <div className="flex-1 container mx-auto py-8">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              <aside className="hidden lg:block w-48 shrink-0">
                <SidebarNav filters={filters} currentPath={currentPath} />
              </aside>
              <main className="flex-1 min-h-[calc(100vh-200px)]">
                <div className="space-y-6">{children}</div>
              </main>
            </div>
          </div>
        </div>
      </SearchProvider>
    </ThemeProvider>
  );
}
