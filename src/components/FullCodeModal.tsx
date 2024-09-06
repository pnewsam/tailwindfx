import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
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

interface FullCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lightCode: string;
  darkCode: string;
  title: string;
}

export function FullCodeModal({
  isOpen,
  onClose,
  lightCode,
  darkCode,
  title,
}: FullCodeModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(lightCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            View and copy the full code for this effect.
          </DialogDescription>
        </DialogHeader>
        <div className="relative mt-4 max-w-6xl">
          <Button
            variant="outline"
            size="sm"
            className="absolute top-2 right-2 z-10"
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy"}
            <Copy className="ml-2 h-4 w-4" />
          </Button>
          <div className="bg-muted p-4 rounded-md overflow-x-scroll">
            <SyntaxHighlighter
              code={lightCode}
              language="markup"
              style={nord}
              wrapLines
              wrapLongLines
            >
              {lightCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
