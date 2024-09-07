"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { SyntaxHighlighter } from "@/components/SyntaxHighlighter";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <div></div>
          <CardTitle className="text-xl text-foreground/90 font-medium">
            {name}
          </CardTitle>
          <Popover>
            <PopoverTrigger className="justify-self-end">
              <Avatar className="inline-flex w-8 h-8 border border-border items-center text-xs">
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary/[.0125] hover:bg-primary/[.025]">
                  IB
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="text-center px-4 py-3 items-center w-auto text-sm border-border">
              <span>View source at</span>&nbsp;
              <a
                className="underline hover:text-primary"
                href="https://ui.ibelick.com/"
              >
                ui.belick.com
              </a>
            </PopoverContent>
          </Popover>
        </div>
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
          <TabsContent
            value="code"
            className="m-0 border-none py-4 px-5 space-y-4"
          >
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
              <SyntaxHighlighter
                code={theme === "dark" ? darkCode : lightCode}
              />
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

                <SyntaxHighlighter
                  language="typescript"
                  code={tailwindConfig}
                />
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
