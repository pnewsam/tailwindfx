import { CodeSnippet } from "@/components/CodeSnippet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useTheme } from "next-themes";

interface FullCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  code: string;
  title: string;
  tailwindConfig?: string;
  description?: string;
}

export function FullCodeModal({
  isOpen,
  onClose,
  code,
  tailwindConfig,
  title,
  description,
}: FullCodeModalProps) {
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
          <CodeSnippet code={code} label="HTML" />
        </div>
        {tailwindConfig && (
          <CodeSnippet
            code={tailwindConfig}
            language="typescript"
            label="Tailwind Config"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
