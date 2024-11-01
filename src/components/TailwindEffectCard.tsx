"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { CodeSnippet } from "@/components/CodeSnippet";
import { Badge } from "@/components/ui/badge";
import { Copy } from "lucide-react";
import { readableCategory } from "@/models/categories/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Maximize2, CopyCheck } from "lucide-react";
import { FullCodeModal } from "./FullCodeModal";

interface TailwindEffectCardProps {
  name: string;
  displayCode: string;
  code: string;
  tailwindConfig?: string;
  description: string;
  category: string;
}

export function TailwindEffectCard({
  name,
  displayCode,
  code,
  tailwindConfig,
  description,
  category,
}: TailwindEffectCardProps) {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Card className="w-full max-w-full overflow-hidden border border-stone-400/25 shadow-[2px_4px_32px_4px_rgba(0,0,0,0.05)] dark:shadow-[2px_4px_32px_4px_rgba(255,255,255,0.05)]">
      <CardHeader className="bg-secondary text-center py-4 border-none">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <div className="justify-self-start">
            <Badge variant="outline">{readableCategory(category)}</Badge>
          </div>
          {/* <Popover>
            <PopoverTrigger className="justify-self-start">
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
          </Popover> */}
          <CardTitle className="text-xl text-foreground/90 font-medium">
            {name}
          </CardTitle>

          <div className="flex gap-2 justify-self-end">
            <Button variant="outline" size="sm" onClick={handleCopy}>
              {isCopied ? (
                <CopyCheck className="h-4 w-4 text-green-400" />
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
          <TabsContent
            value="preview"
            className="m-0 border-none relative group"
          >
            <div
              className="flex min-h-[200px] items-center justify-center overflow-x-auto p-4"
              dangerouslySetInnerHTML={{ __html: displayCode }}
            />
          </TabsContent>
          <TabsContent
            value="code"
            className="m-0 border-none py-4 px-5 space-y-4"
          >
            <div className="relative">
              <div className="absolute right-2 top-2 z-10 flex space-x-2"></div>
              <CodeSnippet
                code={code}
                label="HTML"
                popoverContent="Source does not include code used only for display purposes."
              />
            </div>
            {tailwindConfig && (
              <CodeSnippet
                language="typescript"
                code={tailwindConfig}
                label="Tailwind Config"
              />
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <FullCodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        code={code}
        title={name}
        tailwindConfig={tailwindConfig}
        description={description}
      />
    </Card>
  );
}
