import { TailwindEffect } from "./types";

export const tailwindEffects: TailwindEffect[] = [
  {
    name: "Gradient Background",
    description: "Text with a gradient background",
    code: `<div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded inline-block">
  Gradient Text
</div>`,
    category: "components/text",
    mode: "both",
  },
  {
    name: "Neon Glow",
    description: "Text effect simulating a neon sign",
    code: `<div class="text-4xl font-bold text-white">
  <span class="bg-black px-2 animate-pulse">
    Neon
  </span>
  <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
    Glow
  </span>
</div>`,
    category: "components/text",
    mode: "light",
  },
  {
    name: "3D Text",
    description: "Text effect with a 3D appearance",
    code: `<div class="text-5xl font-extrabold">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 px-2">
    3D Text
  </span>
</div>`,
    category: "components/text",
    mode: "both",
  },
  {
    name: "Retro Pixel",
    description: "Text effect mimicking old-school pixel art typography",
    code: `<div class="text-4xl font-bold text-white bg-black p-4 font-mono" style="text-shadow: 2px 2px 0 #4a4a4a, 4px 4px 0 #3a3a3a">
  RETRO
</div>`,
    category: "components/text",
    mode: "both",
  },
];
