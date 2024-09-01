import { TailwindEffect } from "@/data/tailwindEffects";

export const getTailwindEffects = async (categoryKey: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/effects?category=${categoryKey}`
  );
  const data = await response.json();
  return data;
};

export const submitEffect = async (effect: TailwindEffect) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/effects`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(effect),
    }
  );
  const data = await response.json();
  return data;
};
