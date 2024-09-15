import { useState } from "react";
import { Paintbrush } from "lucide-react";
import { ColorPickerModal } from "@/components/ColorPickerModal";
import { Button } from "@/components/ui/button";

export const ColorPickerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
        Pick a color
        <Paintbrush className="w-4 h-4 ml-2" />
      </Button>
      <ColorPickerModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
