/**

I'm working on a website that provides a collection of Tailwind CSS "effects"
for developers to use in their projects.

These "effects" are meant to be both useful and instructive. In other words,
every "effect" should be as simple as possible, while achieving the desired
visual appearance, so that developers can readily understand how the effect
is achieved in concept.

I'm reaching out to you because you are a shrewd, talented UX designer
well-versed in modern design, and an expert in Tailwind CSS. I've hired you
at great expense to help me create a collection of "effects" for use on this
website.

*/

/*

I'm going to provide you with the type for an effect, and then you will
provide the code for effect or effects. Here are a few requirements:

- The style of each effect should be distinct.
- The code for the effect should require the least amount of code possible.
  (It is okay to have many Tailwind classes if necessary, but ideally the
  HTML will have only a single element).

*/

export interface TailwindEffect {
  id?: number;
  name: string; // eg. "Skeuomorphic" for a button in a skeuomorphic style
  description: string; // e.g. "A button with a shadow"
  category: string; // e.g. "components/button" or "layouts/navbar"

  codeLight: string; // code for the light theme, which the developer can copy
  codeDark: string; // code for the dark theme, which the developer can copy
  displayCodeLight: string; // display code, which may include additional markup for display purposes
  displayCodeDark: string; // display code, which may include additional markup for display purposes

  tailwindConfig?: string; // code for the Tailwind configuration, if applicable
  source?: string; // URL to the source code of the effect, if applicable
}
