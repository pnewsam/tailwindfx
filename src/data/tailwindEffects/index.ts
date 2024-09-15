import { TailwindEffect } from "./types";

export const tailwindEffects: TailwindEffect[] = [
  {
    name: "Text Shine",
    description: "Text with an animated shine",
    codeLight: `<span class="inline-flex animate-background-shine bg-[linear-gradient(110deg,#f0f0f0,45%,#a0a0a0,55%,#f0f0f0)] bg-[length:250%_100%] bg-clip-text text-4xl text-transparent font-bold text-center">
    Do I Dare Disturb the Universe?
    </span>`,
    codeDark: `<span class="inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-4xl text-transparent font-bold text-center">
  Do I Dare Disturb the Universe?
  </span>`,
    displayCodeLight: `<span class="inline-flex animate-background-shine bg-[linear-gradient(110deg,#f0f0f0,45%,#a0a0a0,55%,#f0f0f0)] bg-[length:250%_100%] bg-clip-text text-4xl text-transparent font-bold text-center">
  Do I Dare Disturb the Universe?
</span>`,
    displayCodeDark: `<span class="inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-4xl text-transparent font-bold text-center">
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
    codeLight: `<span class="bg-gradient-to-t from-primary-100 to-primary-500 bg-clip-text text-transparent text-4xl font-bold text-center">
    Do I Dare Disturb the Universe?
  </span>`,
    codeDark: `<span class="bg-gradient-to-t from-primary-100 to-primary-500 bg-clip-text text-transparent text-4xl font-bold text-center">
    Do I Dare Disturb the Universe?
  </span>`,
    displayCodeLight: `<span class="bg-gradient-to-t from-primary-100 to-primary-500 bg-clip-text text-transparent text-4xl font-bold text-center">
    Do I Dare Disturb the Universe?
  </span>`,
    displayCodeDark: `<span class="bg-gradient-to-t from-primary-100 to-primary-500 bg-clip-text text-transparent text-4xl font-bold text-center">
    Do I Dare Disturb the Universe?
  </span>`,
    category: "components/text",
    source: "https://ui.ibelick.com/",
  },
  {
    name: "Text Gradient Shine",
    description: "Text effect with a gradient shine",
    codeLight: `<span class="inline-flex animate-text-gradient bg-gradient-to-r from-primary-200 via-primary-500 to-primary-100 bg-[200%_auto] bg-clip-text text-transparent text-4xl font-bold text-center">
    Do I Dare Disturb the Universe?
    </span>`,
    codeDark: `<span class="inline-flex animate-text-gradient bg-gradient-to-r from-primary-200 via-primary-500 to-primary-100 bg-[200%_auto] bg-clip-text text-transparent text-4xl font-bold text-center">
    Do I Dare Disturb the Universe?
    </span>`,
    displayCodeLight: `<span class="inline-flex animate-text-gradient bg-gradient-to-r from-primary-200 via-primary-500 to-primary-100 bg-[200%_auto] bg-clip-text text-transparent text-4xl font-bold text-center">
    Do I Dare Disturb the Universe?
    </span>`,
    displayCodeDark: `<span class="inline-flex animate-text-gradient bg-gradient-to-r from-primary-200 via-primary-500 to-primary-100 bg-[200%_auto] bg-clip-text text-transparent text-4xl font-bold text-center">
    Do I Dare Disturb the Universe?
    </span>`,
    category: "components/text",
    source: "https://ui.ibelick.com/",
  },

  {
    name: "Container",
    description: "Container effect",
    codeLight: `<div class="container max-w-6xl mx-auto px-4 md:px-8">
</div>`,
    displayCodeLight: `<div class="container max-w-6xl mx-auto px-4 md:px-8">
    <div class="bg-red-100 border-red-200 border-2 w-full h-full min-h-[100px]" />
    <p class="text-4xl font-bold text-red-800 text-center">
    Max Width 6xl
    </p>
    </div>
</div>`,
    codeDark: `<div class="container max-w-6xl mx-auto px-4 md:px-8">
</div>`,
    displayCodeDark: `<div class="container max-w-6xl mx-auto px-4 md:px-8">
    <div class="bg-red-100 border-red-200 border-2 w-full h-full min-h-[100px]" />
    <p class="text-4xl font-bold text-red-800 text-center">
    Max Width 6xl
    </p>
    </div>
</div>`,
    category: "layouts/container",
    source: "https://ui.ibelick.com/",
  },
];
