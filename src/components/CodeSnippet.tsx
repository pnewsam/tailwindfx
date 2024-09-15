"use client";

import { useState } from "react";
import { SyntaxHighlighter } from "@/components/SyntaxHighlighter";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

export const CodeSnippet = ({
  code,
  language = "markup",
}: {
  code: string;
  language?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          {language.toUpperCase()}
        </span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleCopy}>
            {copied ? (
              <>
                <span className="mr-2 text-green-500">Copied!</span>
                <Check className="h-4 w-4 text-green-500" />
              </>
            ) : (
              <>
                <span className="mr-2">Copy</span>
                <Copy className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
      <SyntaxHighlighter language={language} code={code} />
    </div>
  );
};
