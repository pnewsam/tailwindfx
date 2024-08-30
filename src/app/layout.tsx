import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const body = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={body.className}>{children}</body>
    </html>
  );
}
