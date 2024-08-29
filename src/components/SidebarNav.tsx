import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface NavItem {
  name: string;
  path: string;
}

interface NavCategory {
  category: string;
  items: NavItem[];
}

interface SidebarNavProps {
  filters: NavCategory[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export function SidebarNav({
  filters,
  activeFilter,
  setActiveFilter,
}: SidebarNavProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
          >
            <Menu className="h-5 w-4" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[200px] sm:w-[240px]">
          <nav className="flex flex-col space-y-4">
            {filters.map((category) => (
              <div key={category.category}>
                <h3 className="mb-2 font-semibold text-foreground/80">
                  {category.category}
                </h3>
                {category.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveFilter(item.name.toLowerCase());
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <aside className="md:w-48 md:shrink-0 hidden md:block">
        <nav className="sticky top-24 space-y-4 pr-4">
          {filters.map((category) => (
            <div key={category.category}>
              <h3 className="mb-2 font-semibold text-foreground/80">
                {category.category}
              </h3>
              {category.items.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className={`block py-2 px-3 rounded-md text-sm ${
                    activeFilter === item.name.toLowerCase()
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveFilter(item.name.toLowerCase());
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
