import { TailwindEffect } from "@/data/tailwindEffects";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const EFFECTS_URL = `${backendUrl}/effects`;

export const fetchTailwindEffects = async (categoryKey: string) => {
  const response = await fetch(`${EFFECTS_URL}?category=${categoryKey}`);
  const data = await response.json();
  return data;
};

export const submitTailwindEffect = async (effect: TailwindEffect) => {
  const response = await fetch(EFFECTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(effect),
  });
  const data = await response.json();
  return data;
};
