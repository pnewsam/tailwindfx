"use client";

import { useState, FormEvent } from "react";
import { Sun, Moon, SunMoon } from "lucide-react";
import {
  Select,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectSeparator,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface SubmitEffectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export function SubmitEffectModal({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
}: SubmitEffectModalProps) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [category, setCategory] = useState("");
  const [mode, setMode] = useState("light");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Submit a New Effect</DialogTitle>
          <DialogDescription>
            Share your Tailwind CSS effect with the community. Please provide
            the details below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Effect Name</Label>
            <Input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter effect name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select
              name="category"
              required
              onValueChange={(value) => setCategory(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Components</SelectLabel>
                  <SelectItem value="components/text">Text</SelectItem>
                  <SelectItem value="components/button">Button</SelectItem>
                  <SelectItem value="components/card">Card</SelectItem>
                  <SelectItem value="components/input">Input</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Layout</SelectLabel>
                  <SelectItem value="layout/grid">Grid</SelectItem>
                  <SelectItem value="layout/flex">Flex</SelectItem>
                  <SelectItem value="layout/other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="code">Code</Label>
            <Textarea
              id="code"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your Tailwind CSS code here"
              required
              className="font-mono"
              rows={10}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Effect"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
