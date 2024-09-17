const textContent = "Click Me";

export const buttonEffects = [
  {
    name: "Glassmorphic",
    description:
      "A sophisticated glassmorphic button design using a single primary color and minimal markup",
    code: `<button class="relative px-8 py-3 text-lg font-semibold text-primary-700 bg-primary-background bg-opacity-10 rounded-full overflow-hidden backdrop-blur-md border border-primary-200 border-opacity-20 shadow-xl transition-all duration-300 ease-out hover:bg-opacity-20 hover:text-primary-900 hover:shadow-primary-500/20 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary-300 before:to-transparent before:opacity-0 before:hover:opacity-20 before:transition-opacity before:duration-300 before:ease-out after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-br after:from-primary-200 after:via-primary-300 after:to-primary-400 after:opacity-0 after:hover:opacity-50 after:blur-2xl after:transition-opacity after:duration-300 after:ease-out">
</button>`,
    displayCode: `<button class="relative px-8 py-3 text-lg font-semibold text-primary-700 bg-primary-background bg-opacity-10 rounded-full overflow-hidden backdrop-blur-md border border-primary-200 border-opacity-20 shadow-xl transition-all duration-300 ease-out hover:bg-opacity-20 hover:text-primary-900 hover:shadow-primary-500/20 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary-300 before:to-transparent before:opacity-0 before:hover:opacity-20 before:transition-opacity before:duration-300 before:ease-out after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-br after:from-primary-200 after:via-primary-300 after:to-primary-400 after:opacity-0 after:hover:opacity-50 after:blur-2xl after:transition-opacity after:duration-300 after:ease-out">
  ${textContent}
</button>`,
    category: "components/button",
  },
  {
    name: "Skeuomorphic",
    description:
      "A highly realistic, 3D button design with properly aligned shadows and enhanced depth perception",
    code: `<button class="relative px-8 py-3 text-lg font-bold text-primary-700 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 rounded-lg shadow-[0_6px_0_rgb(var(--color-primary-400)),0_3px_15px_rgba(0,0,0,0.1),inset_0_-2px_0_rgba(0,0,0,0.1)] border border-primary-400 border-b-primary-500 transition-all duration-150 ease-in-out hover:brightness-110 hover:translate-y-0.5 hover:shadow-[0_4px_0_rgb(var(--color-primary-400)),0_3px_15px_rgba(0,0,0,0.1),inset_0_-2px_0_rgba(0,0,0,0.1)] active:translate-y-2 active:border-b-primary-400 active:shadow-[0_0px_0_rgb(var(--color-primary-400)),0_0px_0_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-primary-50 before:absolute before:content-[""] before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:top-[-2px] before:left-[-2px] before:z-[-1] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:rounded-lg">
      ${textContent}
    </button>`,
    displayCode: `<button class="relative px-8 py-3 text-lg font-bold text-primary-700 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 rounded-lg shadow-[0_6px_0_rgb(var(--color-primary-400)),0_3px_15px_rgba(0,0,0,0.1),inset_0_-2px_0_rgba(0,0,0,0.1)] border border-primary-400 border-b-primary-500 transition-all duration-150 ease-in-out hover:brightness-110 hover:translate-y-0.5 hover:shadow-[0_4px_0_rgb(var(--color-primary-400)),0_3px_15px_rgba(0,0,0,0.1),inset_0_-2px_0_rgba(0,0,0,0.1)] active:translate-y-2 active:border-b-primary-400 active:shadow-[0_0px_0_rgb(var(--color-primary-400)),0_0px_0_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-primary-50 before:absolute before:content-[""] before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:top-[-2px] before:left-[-2px] before:z-[-1] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:rounded-lg">
      ${textContent}
    </button>`,
    category: "components/button",
  },
  {
    name: "Rotating Gradient",
    description:
      "Uses a spinning conic gradient on an inset element to achieve a rotating border",
    code: `<button class="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-primary-50">
    <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-primary-100)_0%,var(--color-primary-500)_50%,var(--color-primary-100)_100%)]"></span>
    <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary-background px-8 py-1 text-sm font-medium text-primary-50 backdrop-blur-3xl">
      ${textContent}
    </span>
  </button>`,
    displayCode: `<button class="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-primary-50">
    <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-primary-100)_0%,var(--color-primary-500)_50%,var(--color-primary-100)_100%)]"></span>
    <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary-background px-8 py-1 text-lg font-medium text-primary-600 backdrop-blur-3xl">
      Click Me
    </span>
  </button>`,
    category: "components/button",
  },
  {
    name: "Adaptive Neumorphic Button with Visible Shadows",
    description:
      "A neumorphic button using the primary color scheme with visible shadows that adapt to light and dark modes",
    category: "components/button",
    code: '<button class="px-6 py-3 rounded-xl bg-primary-100 dark:bg-primary-900 text-primary-950 dark:text-primary-50 font-semibold shadow-[5px_5px_10px_#00000015,-5px_-5px_10px_#ffffff15] dark:shadow-[5px_5px_10px_#00000060,-5px_-5px_10px_#ffffff10] transition-all duration-300 hover:shadow-[inset_5px_5px_10px_#00000015,inset_-5px_-5px_10px_#ffffff15] dark:hover:shadow-[inset_5px_5px_10px_#00000060,inset_-5px_-5px_10px_#ffffff10] active:shadow-[inset_5px_5px_10px_#00000015,inset_-5px_-5px_10px_#ffffff15] dark:active:shadow-[inset_5px_5px_10px_#00000060,inset_-5px_-5px_10px_#ffffff10] focus:outline-none">Click me</button>',
    displayCode:
      '<button class="px-6 py-3 rounded-xl bg-primary-100 dark:bg-primary-900 text-primary-950 dark:text-primary-50 font-semibold shadow-[5px_5px_10px_#00000015,-5px_-5px_10px_#ffffff15] dark:shadow-[5px_5px_10px_#00000060,-5px_-5px_10px_#ffffff10] transition-all duration-300 hover:shadow-[inset_5px_5px_10px_#00000015,inset_-5px_-5px_10px_#ffffff15] dark:hover:shadow-[inset_5px_5px_10px_#00000060,inset_-5px_-5px_10px_#ffffff10] active:shadow-[inset_5px_5px_10px_#00000015,inset_-5px_-5px_10px_#ffffff15] dark:active:shadow-[inset_5px_5px_10px_#00000060,inset_-5px_-5px_10px_#ffffff10] focus:outline-none">Click me</button>',
  },
];
