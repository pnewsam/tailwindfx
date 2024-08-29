"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  mode: "light" | "dark" | "both";
  setMode: (mode: "light" | "dark" | "both") => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [mode, setMode] = useState<"light" | "dark" | "both">("both");

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, mode, setMode }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
