"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ColorPicker } from "@/components/ColorPicker";

export const ColorPickerModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Color Picker</DialogTitle>
          <DialogDescription>
            Choose a primary color. The changes will be reflected in the all
            Tailwind snippets.
          </DialogDescription>
        </DialogHeader>
        <ColorPicker />
      </DialogContent>
    </Dialog>
  );
};
