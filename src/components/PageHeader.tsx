"use client";

import { useSearch } from "@/contexts/SearchContext";
import { Input } from "@/components/ui/input";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div className="space-y-4">
      <div className="min-h-[100px]">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-grow">
          <Input
            type="search"
            placeholder="Search effects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
