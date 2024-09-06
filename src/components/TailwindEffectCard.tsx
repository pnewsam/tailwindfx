"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { SyntaxHighlighter } from "@/components/SyntaxHighlighter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Maximize2 } from "lucide-react";
import { FullCodeModal } from "./FullCodeModal";

interface TailwindEffectCardProps {
  name: string;
  lightCode: string;
  darkCode: string;
  description: string;
}

export function TailwindEffectCard({
  name,
  lightCode,
  darkCode,
  description,
}: TailwindEffectCardProps) {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(lightCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full max-w-full overflow-hidden border shadow-[2px_4px_32px_4px_rgba(0,0,0,0.05)]">
      <CardHeader className="bg-secondary text-center py-4 border-none">
        <CardTitle className="text-xl text-foreground/90 font-medium">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="preview" className="w-full p-0 border-none ">
          <TabsList className="grid w-full grid-cols-2 rounded-t-none p-2 border-none">
            <TabsTrigger
              className="bg-secondary data-[state=active]:bg-secondary data-[state=active]:shadow-none data-[state=active]:bg-card border-none rounded-b-none"
              value="preview"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              className="bg-secondary data-[state=active]:bg-secondary data-[state=active]:shadow-none data-[state=active]:bg-card border-none rounded-b-none"
              value="code"
            >
              Code
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="m-0 border-none">
            <div
              className="flex min-h-[200px] items-center justify-center overflow-x-auto p-4"
              dangerouslySetInnerHTML={{ __html: lightCode }}
            ></div>
          </TabsContent>
          <TabsContent value="code" className="m-0 border-none">
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
              <div className="overflow-x-auto p-4">
                <SyntaxHighlighter
                  code={theme === "dark" ? darkCode : lightCode}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <FullCodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lightCode={lightCode}
        darkCode={darkCode}
        title={name}
      />
    </Card>
  );
}
