"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { SubmitEffectModal } from "@/components/SubmitEffectModal";

export function SubmitEffectButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center"
      >
        <PlusCircle className="mr-2 h-4 w-4" />
        Submit Effect
      </Button>
      <SubmitEffectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
