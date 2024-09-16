import { CategoryDetail } from "./types";
import { categoryDetails } from "@/data/categories";

export const getCategoryDetails = (category: string): CategoryDetail => {
  return categoryDetails[category] || categoryDetails["all"];
};

export const readableCategory = (category: string) => {
  return getCategoryDetails(category).label;
};
