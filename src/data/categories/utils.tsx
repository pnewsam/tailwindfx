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
  "components/form": {
    title: "Form Effects",
    shortTitle: "Form",
    description:
      "Enhance your forms with these Tailwind CSS effects. Improve user experience with stylish inputs, checkboxes, and other form elements.",
  },
  "components/card": {
    title: "Card Effects",
    shortTitle: "Card",
    description:
      "Browse our selection of card effects created with Tailwind CSS. These designs will help you present information in an attractive and organized manner.",
  },
  "components/modal": {
    title: "Modal Effects",
    shortTitle: "Modal",
    description:
      "Explore modal effects that capture user attention. These Tailwind CSS styles create smooth transitions and visually appealing overlays.",
  },
  "components/table": {
    title: "Table Effects",
    shortTitle: "Table",
    description:
      "Discover Tailwind CSS effects for tables that make your data presentation more engaging. From hover effects to responsive designs, find the perfect style for your tables.",
  },
  "components/list": {
    title: "List Effects",
    shortTitle: "List",
    description:
      "Enhance your lists with these Tailwind CSS effects. Whether you're styling navigation menus or content lists, these effects will add visual interest to your design.",
  },

  layouts: {
    title: "Layouts",
    shortTitle: "Layouts",
    description:
      "Explore various layout effects and techniques using Tailwind CSS. From grid systems to flexbox layouts, find the perfect structure for your web pages.",
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

  interactions: {
    title: "Interactions",
    shortTitle: "Interactions",
    description:
      "Discover interactive effects and animations powered by Tailwind CSS. Enhance user engagement with smooth transitions and dynamic elements.",
  },

  "interactions/animation": {
    title: "Animation Effects",
    shortTitle: "Animation",
    description:
      "Explore animation effects powered by Tailwind CSS. Add motion and interactivity to your web elements with these smooth and customizable animations.",
  },
  "interactions/transition": {
    title: "Transition Effects",
    shortTitle: "Transition",
    description:
      "Discover transition effects using Tailwind CSS. These subtle animations add polish to your user interface, enhancing the overall user experience.",
  },
  "interactions/navigation": {
    title: "Navigation Effects",
    shortTitle: "Navigation",
    description:
      "Browse our selection of navigation effects created with Tailwind CSS. From hover states to mobile menus, find the perfect navigation style for your website.",
  },
};

export const getCategoryDetails = (category: string): CategoryDetail => {
  return categoryDetails[category] || categoryDetails["all"];
};
