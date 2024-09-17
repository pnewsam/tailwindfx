const textContent = "<p>Click Me</p>";

export const cardEffects = [
  {
    name: "Rotating Border",
    description:
      "A card with a rotating border that is animated using CSS. The border is a conic gradient that rotates 360 degrees.",
    displayCode: `<div class='relative h-48 w-48 overflow-hidden rounded-xl border border-border p-[1px] backdrop-blur-3xl'>
  <span class='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-primary-500)_0%,var(--color-primary-100)_50%,var(--color-primary-500)_100%)]'></span>
  <div
    class="inline-flex h-full w-full relative items-center justify-center rounded-xl bg-card px-3 py-4 text-sm font-medium text-foreground backdrop-blur-3xl"
  >
  ${textContent}
  </div>
</div>`,
    code: `<div class='relative h-48 w-48 overflow-hidden rounded-xl border border-border p-[1px] backdrop-blur-3xl'>
  <span class='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-primary-500)_0%,var(--color-primary-100)_50%,var(--color-primary-500)_100%)]' />
  <div class='inline-flex h-full w-full items-center justify-center rounded-xl bg-card px-3 py-1 text-sm font-medium text-foreground backdrop-blur-3xl' />
</div>`,
    category: "components/card",
  },
];
