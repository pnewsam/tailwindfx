import { useState } from "react";
import { Paintbrush } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ColorPicker } from "@/components/ColorPicker";
import { Button } from "@/components/ui/button";

export const ColorPickerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
        Pick a color
        <Paintbrush className="w-4 h-4 ml-2" />
      </Button>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Color Picker</DialogTitle>
            <DialogDescription>Pick a color</DialogDescription>
          </DialogHeader>
          <ColorPicker />
        </DialogContent>
      </Dialog>
    </>
  );
};
