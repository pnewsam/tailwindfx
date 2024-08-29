"use client";

import { useState } from "react";
import { Search, Code, Eye, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Component() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    "All",
    "Text",
    "Button",
    "Background",
    "Layout",
    "Form",
    "Navigation",
    "Card",
    "Modal",
    "Table",
    "List",
    "Grid",
    "Flexbox",
    "Animation",
    "Transition",
  ];

  const examples = [
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
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[200px] sm:w-[240px]">
              <nav className="flex flex-col space-y-4">
                {filters.map((filter) => (
                  <a
                    key={filter}
                    href={`/${filter.toLowerCase()}`}
                    className="text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    {filter}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">
                Tailwind FX
              </span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/docs"
              >
                Docs
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/showcase"
              >
                Showcase
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground"
                href="/examples"
              >
                Examples
              </a>
            </nav>
          </div>
        </div>
      </header>
      <div className="flex-1 container mx-auto flex flex-col md:flex-row md:space-x-8 py-8">
        <aside className="md:w-48 md:shrink-0 hidden md:block">
          <nav className="sticky top-24 space-y-1 pr-4">
            {filters.map((filter) => (
              <a
                key={filter}
                href={`/${filter.toLowerCase()}`}
                className={`block py-2 px-3 rounded-md text-sm ${
                  activeFilter === filter.toLowerCase()
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                {filter}
              </a>
            ))}
          </nav>
        </aside>
        <main className="flex-1">
          <h1 className="text-3xl font-bold mb-6">
            {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}{" "}
            Effects
          </h1>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search Tailwind snippets..."
                className="pl-8"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {examples.map((example, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{example.name}</CardTitle>
                  <CardDescription>{example.description}</CardDescription>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                    <span>{example.author}</span>
                    <div className="flex space-x-2">
                      <a
                        href={`https://twitter.com/${example.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                      <a
                        href={example.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="preview" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="preview">
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </TabsTrigger>
                      <TabsTrigger value="code">
                        <Code className="mr-2 h-4 w-4" />
                        Code
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="preview"
                      className="border rounded-md mt-2 p-4 flex items-center justify-center min-h-[150px]"
                    >
                      {example.preview}
                    </TabsContent>
                    <TabsContent value="code" className="mt-2">
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-xs">{example.code}</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
