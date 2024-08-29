"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface PageHeaderProps {
  title: string;
  onSearch?: (searchTerm: string) => void;
}

export function PageHeader({ title, onSearch }: PageHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search Tailwind snippets..."
          className="pl-8"
          onChange={(e) => onSearch && onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
