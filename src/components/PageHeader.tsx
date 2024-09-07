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
import { useState } from "react";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  const { searchTerm, setSearchTerm } = useSearch();
  const [filter, setFilter] = useState("popular");

  return (
    <div className="space-y-6">
      <div className="min-h-[100px]">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex-grow order-2 sm:order-1">
          <Input
            type="search"
            placeholder="Search effects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:w-auto order-1 sm:order-2">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent className="border-border">
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
