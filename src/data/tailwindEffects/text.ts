const textContent = `Do I Dare Disturb the Universe?`;

export const textEffects = [
  {
    name: "Shine",
    description: "Text with an animated shine",
    codeLight: `<p class="animate-background-shine bg-[linear-gradient(110deg,var(--color-primary-50),45%,var(--color-primary-300),55%,var(--color-primary-50))] bg-[length:250%_100%] bg-clip-text text-transparent">
</p>`,
    codeDark: `<p class="animate-background-shine bg-[linear-gradient(110deg,var(--color-primary-950),45%,var(--color-primary-500),55%,var(--color-primary-950))] bg-[length:250%_100%] bg-clip-text text-transparent">
</p>`,
    displayCodeLight: `<p class="aniweqwmate-background-shine bg-[linear-gradient(110deg,var(--color-primary-50),45%,var(--color-primary-300),55%,var(--color-primary-50))] bg-[length:250%_100%] bg-clip-text text-transparent text-4xl font-bold text-center">
  ${textContent}
</p>`,
    displayCodeDark: `<p class="animate-background-shine bg-[linear-gradient(110deg,var(--color-primary-950),45%,var(--color-primary-500),55%,var(--color-primary-950))] bg-[length:250%_100%] bg-clip-text text-transparent text-4xl font-bold text-center">
  ${textContent}
</p>`,
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
    name: "Gradient",
    description: "Text with a gradient",
    codeLight: `<span class="bg-gradient-to-t from-primary-100 to-primary-500 bg-clip-text text-transparent">
</span>`,
    codeDark: `<span class="bg-gradient-to-t from-primary-100 to-primary-500 bg-clip-text text-transparent">
</span>`,
    displayCodeLight: `<span class="bg-gradient-to-t from-primary-100 to-primary-500 bg-clip-text text-transparent text-4xl font-bold text-center">
    ${textContent}
  </span>`,
    displayCodeDark: `<span class="bg-gradient-to-t from-primary-100 to-primary-500 bg-clip-text text-transparent text-4xl font-bold text-center">
    ${textContent}
  </span>`,
    category: "components/text",
    source: "https://ui.ibelick.com/",
  },
  {
    name: "Gradient Shine",
    description: "Text effect with a gradient shine",
    codeLight: `<span class="inline-flex animate-text-gradient bg-gradient-to-r from-primary-200 via-primary-500 to-primary-100 bg-[200%_auto] bg-clip-text text-transparent">
</span>`,
    codeDark: `<span class="inline-flex animate-text-gradient bg-gradient-to-r from-primary-200 via-primary-500 to-primary-100 bg-[200%_auto] bg-clip-text text-transparent">
</span>`,
    displayCodeLight: `<span class="inline-flex animate-text-gradient bg-gradient-to-r from-primary-200 via-primary-500 to-primary-100 bg-[200%_auto] bg-clip-text text-transparent text-4xl font-bold text-center">
    ${textContent}
    </span>`,
    displayCodeDark: `<span class="inline-flex animate-text-gradient bg-gradient-to-r from-primary-200 via-primary-500 to-primary-100 bg-[200%_auto] bg-clip-text text-transparent text-4xl font-bold text-center">
    ${textContent}
    </span>`,
    category: "components/text",
    source: "https://ui.ibelick.com/",
  },
];
