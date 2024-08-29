import Link from "next/link";
import { cn } from "@/lib/utils";

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
    <nav className="space-y-4">
      {filters.map((category) => (
        <div key={category.category}>
          <h3 className="mb-2 font-semibold text-foreground/80">
            {category.category}
          </h3>
          {category.items.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={cn(
                "block py-2 px-3 rounded-md text-sm transition-colors hover:text-foreground/80",
                currentPath === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}
