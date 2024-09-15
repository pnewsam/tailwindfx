import { CodeSnippet } from "@/components/CodeSnippet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";

interface FullCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  codeLight: string;
  codeDark: string;
  title: string;
  tailwindConfig?: string;
  description?: string;
}

export function FullCodeModal({
  isOpen,
  onClose,
  codeLight,
  codeDark,
  tailwindConfig,
  title,
  description,
}: FullCodeModalProps) {
  const { theme } = useTheme();

  const [copied, setCopied] = useState(false);
  const [copiedConfig, setCopiedConfig] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeLight);
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="relative mt-2 max-w-6xl">
          <CodeSnippet code={theme === "dark" ? codeDark : codeLight} />
        </div>
        {tailwindConfig && (
          <CodeSnippet code={tailwindConfig} language="typescript" />
        )}
      </DialogContent>
    </Dialog>
  );
}
