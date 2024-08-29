"use client";

import { useSearch } from "@/contexts/SearchContext";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  const { searchTerm, setSearchTerm, mode, setMode } = useSearch();

  return (
    <div className="space-y-4 mb-8">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
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
        <Select
          value={mode}
          onValueChange={(value: "light" | "dark" | "both") => setMode(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="both">All Modes</SelectItem>
            <SelectItem value="light">Light Mode</SelectItem>
            <SelectItem value="dark">Dark Mode</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
