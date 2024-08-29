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
import { SyntaxHighlighter } from "./SyntaxHighlighter";

interface FullCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  code: string;
  title: string;
}

export function FullCodeModal({
  isOpen,
  onClose,
  code,
  title,
}: FullCodeModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
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
        <div className="relative mt-4">
          <Button
            variant="outline"
            size="sm"
            className="absolute top-2 right-2 z-10"
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy"}
            <Copy className="ml-2 h-4 w-4" />
          </Button>
          <div className="bg-muted p-4 rounded-md overflow-x-auto">
            <SyntaxHighlighter code={code} language="markup" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
