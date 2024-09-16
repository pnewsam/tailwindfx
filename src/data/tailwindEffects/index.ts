import { TailwindEffect } from "@/models/tailwindEffect/types";
import { containerEffects } from "./container";
import { textEffects } from "./text";
import { buttonEffects } from "./button";

export const tailwindEffects: TailwindEffect[] = [
  ...textEffects,
  ...buttonEffects,
  ...containerEffects,
];
