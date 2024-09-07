import { TailwindEffect } from "./types";

export const tailwindEffects: TailwindEffect[] = [
  {
    name: "Text Shine",
    description: "Text with an animated shine",
    lightCode: `<span class='inline-flex animate-background-shine bg-[linear-gradient(110deg,#f0f0f0,45%,#a0a0a0,55%,#f0f0f0)] bg-[length:250%_100%] bg-clip-text text-4xl text-transparent font-bold text-center'>
  Do I Dare Disturb the Universe?
</span>`,
    darkCode: `<span class='inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-4xl text-transparent font-bold text-center'>
  Do I Dare Disturb the Universe?
</span>`,
    tailwindConfig: `{
  "animation": {
    "background-shine": "background-shine 2s linear infinite"
  },
  "keyframes": {
    "background-shine": {
      "from": {
        "backgroundPosition": "0 0"
      },
      "to": {
        "backgroundPosition": "-200% 0"
      }
    }
  }
}`,
    category: "components/text",
    source: "https://ui.ibelick.com/",
  },
  {
    name: "Text Gradient",
    description: "Text with a gradient",
    lightCode: `<span class='bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent text-4xl font-bold text-center'>
    Do I Dare Disturb the Universe?
  </span>`,
    darkCode: `<span class='bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent text-4xl font-bold text-center'>
    Do I Dare Disturb the Universe?
  </span>`,
    category: "components/text",
    source: "https://ui.ibelick.com/",
  },
  {
    name: "Text Gradient Shine",
    description: "Text effect with a gradient shine",
    lightCode: `<span class='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent text-4xl font-bold text-center'>
    Do I Dare Disturb the Universe?
    </span>`,
    darkCode: `<span class='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent text-4xl font-bold text-center'>
    Do I Dare Disturb the Universe?
    </span>`,
    category: "components/text",
    source: "https://ui.ibelick.com/",
  },
];
