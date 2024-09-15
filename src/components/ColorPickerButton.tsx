import { useState } from "react";
import { Paintbrush } from "lucide-react";
import { ColorPickerModal } from "@/components/ColorPickerModal";
import { Button } from "@/components/ui/button";

export const ColorPickerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="outline"
        className="p-2 md:p-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hidden md:block">Pick a color</span>
        <Paintbrush className="w-4 h-4 md:ml-2" />
      </Button>
      <ColorPickerModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
