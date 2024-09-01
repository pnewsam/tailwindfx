export interface TailwindEffect {
  name: string;
  description: string;
  code: string;
  category: string;
  mode: "light" | "dark" | "both";
}
