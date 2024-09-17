import { TailwindEffect } from "@/models/tailwindEffect/types";
import { containerEffects } from "./container";
import { textEffects } from "./text";
import { buttonEffects } from "./button";
import { cardEffects } from "./card";

export const tailwindEffects: TailwindEffect[] = [
  ...textEffects,
  ...buttonEffects,
  ...cardEffects,
  ...containerEffects,
];
