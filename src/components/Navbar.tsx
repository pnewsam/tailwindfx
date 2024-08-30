"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface NavItem {
  name: string;
  path: string;
}

interface NavCategory {
  category: string;
  items: NavItem[];
}

interface NavbarProps {
  filters: NavCategory[];
}

export function Navbar({ filters }: NavbarProps) {
  const pathname = usePathname();

  const mainNavItems = [
    { name: "Components", path: "/components" },
    { name: "Layouts", path: "/layouts" },
    { name: "Interactions", path: "/interactions" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold inline-block">TailwindFX</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname.startsWith(item.path)
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="p-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[280px]">
              <nav className="flex flex-col space-y-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-foreground/80",
                      pathname.startsWith(item.path)
                        ? "text-foreground"
                        : "text-foreground/60"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  {filters.map((category) => (
                    <div key={category.category} className="mb-4">
                      <h3 className="mb-2 text-sm font-semibold text-foreground/80">
                        {category.category}
                      </h3>
                      {category.items.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className={cn(
                            "block py-2 text-sm font-medium transition-colors hover:text-foreground/80",
                            pathname === item.path
                              ? "text-foreground"
                              : "text-foreground/60"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
