import { TailwindEffect } from "@/models/tailwindEffect/types";
import { containerEffects } from "./container";
import { textEffects } from "./text";

export const tailwindEffects: TailwindEffect[] = [
  ...textEffects,
  ...containerEffects,
];
