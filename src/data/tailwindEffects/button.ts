const textContent = "Click Me";

export const buttonEffects = [
  {
    name: "Glassmorphic",
    description:
      "A sophisticated glassmorphic button design using a single primary color and minimal markup",
    codeLight: `<button class="relative px-8 py-3 text-lg font-semibold text-primary-700 bg-primary-50 bg-opacity-10 rounded-full overflow-hidden backdrop-blur-md border border-primary-200 border-opacity-20 shadow-xl transition-all duration-300 ease-out hover:bg-opacity-20 hover:text-primary-900 hover:shadow-primary-500/20 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary-300 before:to-transparent before:opacity-0 before:hover:opacity-20 before:transition-opacity before:duration-300 before:ease-out after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-br after:from-primary-200 after:via-primary-300 after:to-primary-400 after:opacity-0 after:hover:opacity-50 after:blur-2xl after:transition-opacity after:duration-300 after:ease-out">
</button>`,
    codeDark: `<button class="relative px-8 py-3 text-lg font-semibold text-primary-100 bg-primary-900 bg-opacity-30 rounded-full overflow-hidden backdrop-blur-md border border-primary-700 border-opacity-20 shadow-xl transition-all duration-300 ease-out hover:bg-opacity-40 hover:text-primary-50 hover:shadow-primary-500/30 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary-600 before:to-transparent before:opacity-0 before:hover:opacity-20 before:transition-opacity before:duration-300 before:ease-out after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-br after:from-primary-700 after:via-primary-600 after:to-primary-500 after:opacity-0 after:hover:opacity-50 after:blur-2xl after:transition-opacity after:duration-300 after:ease-out">
</button>`,
    displayCodeLight: `<button class="relative px-8 py-3 text-lg font-semibold text-primary-700 bg-primary-50 bg-opacity-10 rounded-full overflow-hidden backdrop-blur-md border border-primary-200 border-opacity-20 shadow-xl transition-all duration-300 ease-out hover:bg-opacity-20 hover:text-primary-900 hover:shadow-primary-500/20 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary-300 before:to-transparent before:opacity-0 before:hover:opacity-20 before:transition-opacity before:duration-300 before:ease-out after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-br after:from-primary-200 after:via-primary-300 after:to-primary-400 after:opacity-0 after:hover:opacity-50 after:blur-2xl after:transition-opacity after:duration-300 after:ease-out">
    ${textContent}
  </button>`,
    displayCodeDark: `<button class="relative px-8 py-3 text-lg font-semibold text-primary-100 bg-primary-900 bg-opacity-30 rounded-full overflow-hidden backdrop-blur-md border border-primary-700 border-opacity-20 shadow-xl transition-all duration-300 ease-out hover:bg-opacity-40 hover:text-primary-50 hover:shadow-primary-500/30 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary-600 before:to-transparent before:opacity-0 before:hover:opacity-20 before:transition-opacity before:duration-300 before:ease-out after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-br after:from-primary-700 after:via-primary-600 after:to-primary-500 after:opacity-0 after:hover:opacity-50 after:blur-2xl after:transition-opacity after:duration-300 after:ease-out">
    ${textContent}
  </button>`,
    category: "components/button",
  },
  {
    name: "Skeuomorphic",
    description:
      "A highly realistic, 3D button design with properly aligned shadows and enhanced depth perception",
    codeLight: `<button class="relative px-8 py-3 text-lg font-bold text-primary-700
  bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200
  rounded-lg
  shadow-[0_6px_0_rgb(var(--color-primary-400)),0_3px_15px_rgba(0,0,0,0.1),inset_0_-2px_0_rgba(0,0,0,0.1)]
  border border-primary-400 border-b-primary-500
  transition-all duration-150 ease-in-out
  hover:brightness-110 hover:translate-y-0.5 hover:shadow-[0_4px_0_rgb(var(--color-primary-400)),0_3px_15px_rgba(0,0,0,0.1),inset_0_-2px_0_rgba(0,0,0,0.1)] active:translate-y-2 active:border-b-primary-400 active:shadow-[0_0px_0_rgb(var(--color-primary-400)),0_0px_0_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-primary-50
  before:absolute before:content-[''] before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:top-[-2px] before:left-[-2px] before:z-[-1] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:rounded-lg
  ">
    ${textContent}
  </button>`,
    codeDark: `<button class="relative px-8 py-3 text-lg font-bold text-primary-100 bg-gradient-to-b from-primary-600 via-primary-700 to-primary-600 rounded-lg shadow-[0_6px_0_rgb(var(--color-primary-900)),0_3px_15px_rgba(0,0,0,0.2),inset_0_-2px_0_rgba(0,0,0,0.2)] border border-primary-500 border-b-primary-900 transition-all duration-150 ease-in-out hover:brightness-110 hover:translate-y-0.5 hover:shadow-[0_4px_0_rgb(var(--color-primary-900)),0_3px_15px_rgba(0,0,0,0.2),inset_0_-2px_0_rgba(0,0,0,0.2)] active:translate-y-2 active:border-b-primary-500 active:shadow-[0_0px_0_rgb(var(--color-primary-900)),0_0px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-primary-900 before:absolute before:content-[''] before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:top-[-2px] before:left-[-2px] before:z-[-1] before:bg-gradient-to-b before:from-white/10 before:to-transparent before:rounded-lg">
    ${textContent}
  </button>`,
    displayCodeLight: `<button class="relative px-8 py-3 text-lg font-bold text-primary-700 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 rounded-lg shadow-[0_6px_0_rgb(var(--color-primary-400)),0_3px_15px_rgba(0,0,0,0.1),inset_0_-2px_0_rgba(0,0,0,0.1)] border border-primary-400 border-b-primary-500 transition-all duration-150 ease-in-out hover:brightness-110 hover:translate-y-0.5 hover:shadow-[0_4px_0_rgb(var(--color-primary-400)),0_3px_15px_rgba(0,0,0,0.1),inset_0_-2px_0_rgba(0,0,0,0.1)] active:translate-y-2 active:border-b-primary-400 active:shadow-[0_0px_0_rgb(var(--color-primary-400)),0_0px_0_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-primary-50 before:absolute before:content-[''] before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:top-[-2px] before:left-[-2px] before:z-[-1] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:rounded-lg">
    ${textContent}
  </button>`,
    displayCodeDark: `<button class="relative px-8 py-3 text-lg font-bold text-primary-100 bg-gradient-to-b from-primary-600 via-primary-700 to-primary-600 rounded-lg shadow-[0_6px_0_rgb(var(--color-primary-900)),0_3px_15px_rgba(0,0,0,0.2),inset_0_-2px_0_rgba(0,0,0,0.2)] border border-primary-500 border-b-primary-900 transition-all duration-150 ease-in-out hover:brightness-110 hover:translate-y-0.5 hover:shadow-[0_4px_0_rgb(var(--color-primary-900)),0_3px_15px_rgba(0,0,0,0.2),inset_0_-2px_0_rgba(0,0,0,0.2)] active:translate-y-2 active:border-b-primary-500 active:shadow-[0_0px_0_rgb(var(--color-primary-900)),0_0px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-primary-900 before:absolute before:content-[''] before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:top-[-2px] before:left-[-2px] before:z-[-1] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:rounded-lg">
    ${textContent}
  </button>`,
    category: "components/button",
  },
];
