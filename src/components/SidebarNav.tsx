import Link from "next/link";
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
  currentPath: string;
}

export function SidebarNav({ filters, currentPath }: SidebarNavProps) {
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
                  <Link
                    key={item.name}
                    href={item.path}
                    className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </Link>
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
                <Link
                  key={item.name}
                  href={item.path}
                  className={`
                    block py-2 px-3 rounded-md text-sm
                    transition-colors duration-200
                    ${
                      currentPath === item.path
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-primary hover:bg-muted"
                    }
                  `}
                >
                  <span className="inline-block w-full">{item.name}</span>
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
