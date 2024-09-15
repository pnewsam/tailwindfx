export interface CategoryDetail {
  title: string;
  description: string;
  shortTitle: string;
}

export const categoryDetails: Record<string, CategoryDetail> = {
  all: {
    title: "All Tailwind Effects",
    shortTitle: "All",
    description:
      "Explore our complete collection of Tailwind CSS effects, ranging from subtle animations to eye-catching designs. Find the perfect effect to enhance your web projects.",
  },

  components: {
    title: "Components",
    shortTitle: "Components",
    description:
      "Discover a wide range of Tailwind CSS effects for various UI components. From buttons to cards, find the perfect styles to enhance your interface elements.",
  },

  "components/text": {
    title: "Text Effects",
    shortTitle: "Text",
    description:
      "Discover a variety of text effects powered by Tailwind CSS. From gradient backgrounds to 3D appearances, these effects will make your typography stand out.",
  },
  "components/button": {
    title: "Button Effects",
    shortTitle: "Button",
    description:
      "Elevate your user interface with our collection of button effects. These Tailwind CSS styles add interactivity and visual appeal to your call-to-action elements.",
  },
  "components/card": {
    title: "Card Effects",
    shortTitle: "Card",
    description:
      "Browse our selection of card effects created with Tailwind CSS. These designs will help you present information in an attractive and organized manner.",
  },

  "components/input": {
    title: "Input Effects",
    shortTitle: "Input",
    description:
      "Discover input effects using Tailwind CSS. These styles enhance the user experience by providing visual feedback and interactive elements.",
  },

  layouts: {
    title: "Layouts",
    shortTitle: "Layouts",
    description:
      "Explore various layout effects and techniques using Tailwind CSS. From grid systems to flexbox layouts, find the perfect structure for your web pages.",
  },
  "layouts/container": {
    title: "Containers",
    shortTitle: "Container",
    description:
      "Explore containers for Tailwind CSS. These are used to contain, organize, and style content within your web pages.",
  },

  "layouts/grid": {
    title: "Grid Layout Effects",
    shortTitle: "Grid",
    description:
      "Explore grid layout effects powered by Tailwind CSS. These designs will help you create responsive and visually appealing page structures.",
  },
  "layouts/flexbox": {
    title: "Flexbox Layout Effects",
    shortTitle: "Flexbox",
    description:
      "Discover flexbox layout effects using Tailwind CSS. These flexible designs allow for dynamic and responsive content arrangement.",
  },
  "layouts/background": {
    title: "Background Effects",
    shortTitle: "Background",
    description:
      "Browse our collection of background effects created with Tailwind CSS. From gradients to patterns, find the perfect background to set the mood for your web pages.",
  },
};

export const getCategoryDetails = (category: string): CategoryDetail => {
  return categoryDetails[category] || categoryDetails["all"];
};
