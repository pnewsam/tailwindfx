import React from "react";

export interface TailwindEffect {
  name: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  author: string;
  twitter: string;
  website: string;
  category: string;
}

export const tailwindEffects: TailwindEffect[] = [
  {
    name: "Gradient Background",
    description: "Text with a gradient background",
    preview: (
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded inline-block">
        Gradient Text
      </div>
    ),
    code: `<div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded inline-block">
  Gradient Text
</div>`,
    author: "Jane Doe",
    twitter: "janedoe",
    website: "https://janedoe.com",
    category: "text",
  },
  {
    name: "Neon Glow",
    description: "Text effect simulating a neon sign",
    preview: (
      <div className="text-4xl font-bold text-white">
        <span className="bg-black px-2 animate-pulse">Neon</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Glow
        </span>
      </div>
    ),
    code: `<div class="text-4xl font-bold text-white">
  <span class="bg-black px-2 animate-pulse">
    Neon
  </span>
  <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
    Glow
  </span>
</div>`,
    author: "John Smith",
    twitter: "johnsmith",
    website: "https://johnsmith.dev",
    category: "text",
  },
  {
    name: "3D Text",
    description: "Text effect with a 3D appearance",
    preview: (
      <div className="text-5xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 px-2">
          3D Text
        </span>
      </div>
    ),
    code: `<div class="text-5xl font-extrabold">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 px-2">
    3D Text
  </span>
</div>`,
    author: "Alice Johnson",
    twitter: "alicej",
    website: "https://alicejohnson.io",
    category: "text",
  },
  {
    name: "Animated Underline",
    description: "Text with an underline that animates on hover",
    preview: (
      <div className="text-2xl font-semibold">
        <span className="relative group">
          Hover me
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </span>
      </div>
    ),
    code: `<div class="text-2xl font-semibold">
  <span class="relative group">
    Hover me
    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
  </span>
</div>`,
    author: "Bob Williams",
    twitter: "bobwilliams",
    website: "https://bobwilliams.net",
    category: "animation",
  },
  {
    name: "Retro Pixel",
    description: "Text effect mimicking old-school pixel art typography",
    preview: (
      <div
        className="text-4xl font-bold text-white bg-black p-4 font-mono"
        style={{ textShadow: "2px 2px 0 #4a4a4a, 4px 4px 0 #3a3a3a" }}
      >
        RETRO
      </div>
    ),
    code: `<div class="text-4xl font-bold text-white bg-black p-4 font-mono" style="text-shadow: 2px 2px 0 #4a4a4a, 4px 4px 0 #3a3a3a">
  RETRO
</div>`,
    author: "Emma Davis",
    twitter: "emmad",
    website: "https://emmadavis.design",
    category: "text",
  },
];
