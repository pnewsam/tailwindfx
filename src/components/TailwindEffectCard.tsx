"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
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
  code: string;
  author: string;
  twitter: string;
  website: string;
  mode: "light" | "dark" | "both";
}

export function TailwindEffectCard({
  name,
  description,
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
      <Sun className="h-4 w-4" />
    ) : mode === "dark" ? (
      <Moon className="h-4 w-4" />
    ) : (
      <SunMoon className="h-4 w-4" />
    );

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full max-w-full overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          <Badge variant="outline" className="flex items-center gap-1">
            {modeIcon} {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-t-none">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="m-0">
            <div
              className="flex min-h-[200px] items-center justify-center overflow-x-auto bg-muted p-4"
              dangerouslySetInnerHTML={{ __html: code }}
            ></div>
          </TabsContent>
          <TabsContent value="code" className="m-0">
            <div className="relative">
              <div className="absolute right-2 top-2 z-10 flex space-x-2">
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
              <div className="overflow-x-auto rounded-md bg-muted p-4">
                <SyntaxHighlighter code={code} language="markup" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <FullCodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        code={code}
        title={name}
      />
    </Card>
  );
}
