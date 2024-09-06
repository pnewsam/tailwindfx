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
  tailwindConfig?: string;
  description: string;
}

export function TailwindEffectCard({
  name,
  lightCode,
  darkCode,
  tailwindConfig,
  description,
}: TailwindEffectCardProps) {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [copiedConfig, setCopiedConfig] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(lightCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyConfig = () => {
    if (tailwindConfig) {
      navigator.clipboard.writeText(tailwindConfig);
      setCopiedConfig(true);
      setTimeout(() => setCopiedConfig(false), 2000);
    }
  };

  return (
    <Card className="w-full max-w-full overflow-hidden border border-stone-400/25 shadow-[2px_4px_32px_4px_rgba(0,0,0,0.05)]">
      <CardHeader className="bg-secondary text-center py-4 border-none">
        <CardTitle className="text-xl text-foreground/90 font-medium">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="preview" className="w-full p-0 border-none">
          <TabsList className="grid w-full grid-cols-2 rounded-t-none px-2 py-2 border-none h-12 gap-1">
            <TabsTrigger
              className="bg-secondary data-[state=active]:shadow-none data-[state=active]:bg-card border-none py-2"
              value="preview"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              className="bg-secondary data-[state=active]:shadow-none data-[state=active]:bg-card border-none py-2"
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
              <div className="p-4">
                <SyntaxHighlighter
                  code={theme === "dark" ? darkCode : lightCode}
                />
              </div>
            </div>
            {tailwindConfig && (
              <div className="relative">
                <div className="absolute right-2 top-2 z-10 flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyConfig}
                  >
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
                <div className="p-4">
                  <SyntaxHighlighter
                    language="typescript"
                    code={tailwindConfig}
                  />
                </div>
              </div>
            )}
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
