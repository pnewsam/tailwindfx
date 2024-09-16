import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import { Plausible } from "@/app/_components/Plausible";
import "./globals.css";

const satoshi = localFont({
  src: "./Satoshi-Variable.woff2",
});

export const metadata: Metadata = {
  title: "TailwindFX",
  description: "Tailwind effects for your next project",
};

const isDev = process.env.NODE_ENV === "development";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {!isDev && <Plausible />}
      <body className={`${satoshi.className}`}>{children}</body>
      <Toaster closeButton />
    </html>
  );
}
