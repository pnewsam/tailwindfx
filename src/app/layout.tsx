import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

import localFont from "next/font/local";

const satoshi = localFont({
  src: "./Satoshi-Variable.woff2",
});

export const metadata: Metadata = {
  title: "TailwindFX",
  description: "Tailwind effects for your next project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className}`}>{children}</body>
      <Toaster closeButton />
    </html>
  );
}
