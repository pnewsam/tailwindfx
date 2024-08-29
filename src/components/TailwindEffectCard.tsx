"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sun, Moon, SunMoon, Copy, Check, Maximize2 } from "lucide-react";
import { SyntaxHighlighter } from "./SyntaxHighlighter";
import { FullCodeModal } from "./FullCodeModal";

interface TailwindEffectCardProps {
  name: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  author: string;
  twitter: string;
  website: string;
  mode: "light" | "dark" | "both";
}

export function TailwindEffectCard({
  name,
  description,
  preview,
  code,
  author,
  twitter,
  website,
  mode,
}: TailwindEffectCardProps) {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modeIcon =
    mode === "light" ? (
      <Sun className="w-4 h-4" />
    ) : mode === "dark" ? (
      <Moon className="w-4 h-4" />
    ) : (
      <SunMoon className="w-4 h-4" />
    );

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full max-w-full overflow-hidden">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{name}</CardTitle>
          <Badge variant="outline" className="flex items-center gap-1">
            {modeIcon} {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <div className="flex items-center justify-center bg-muted rounded-md p-4 min-h-[200px] overflow-x-auto">
              {preview}
            </div>
          </TabsContent>
          <TabsContent value="code">
            <div className="relative">
              <div className="absolute top-2 right-2 z-10 flex space-x-2">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="bg-muted p-4 rounded-md overflow-x-auto">
                <SyntaxHighlighter code={code} language="markup" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between gap-2">
        <div>
          <p className="text-sm text-muted-foreground">By {author}</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" asChild>
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={website} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </Button>
        </div>
      </CardFooter>
      <FullCodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        code={code}
        title={name}
      />
    </Card>
  );
}
