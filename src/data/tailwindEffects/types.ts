export interface TailwindEffect {
  id?: number;
  name: string;
  codeLight: string;
  codeDark: string;
  displayCodeLight: string;
  displayCodeDark: string;
  tailwindConfig?: string;
  description: string;
  category: string;
  source: string;
}
