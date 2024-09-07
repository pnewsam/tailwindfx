"use client";

import { useState, FormEvent } from "react";
import DOMPurify from "dompurify";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { SubmitEffectModal } from "@/components/SubmitEffectModal";
import {
  submitTailwindEffect,
  fetchTailwindEffects,
} from "@/data/tailwindEffects/queries";
import { TailwindEffect } from "@/data/tailwindEffects/types";
import { toast } from "sonner";

export function SubmitEffectButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const code = formData.get("code") as string;
    const sanitizedCode = DOMPurify.sanitize(code);
    const category = formData.get("category") as string;
    const mode = formData.get("mode") as string;
    try {
      await submitTailwindEffect({
        name,
        description,
        source: "user",
        lightCode: sanitizedCode,
        darkCode: sanitizedCode,
        category,
        mode,
      } as TailwindEffect);
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit effect");
    } finally {
      setIsLoading(false);
      toast.success("Effect submitted successfully");
      fetchTailwindEffects();
      setIsModalOpen(false);
    }
  };

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
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </>
  );
}
