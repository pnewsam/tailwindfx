import React, { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import chroma from "chroma-js";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const Swatch = ({ color, number }: { color: string; number: string }) => {
  return (
    <div
      className="h-8 rounded flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <span
        className={cn(
          "text-xs",
          parseInt(number) < 500 ? "text-black/70" : "text-white/70"
        )}
      >
        {number}
      </span>
    </div>
  );
};

const generateColorShades = (baseColor: string) => {
  const shades: Record<string, string> = {};
  const scale = chroma
    .scale([
      chroma(baseColor).brighten(2.5),
      baseColor,
      chroma(baseColor).darken(2.5),
    ])
    .mode("lch")
    .colors(11);

  [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "950",
  ].forEach((shade, index) => {
    shades[shade] = scale[index];
  });

  return shades;
};

const applyColorShades = (shades: Record<string, string>) => {
  Object.entries(shades).forEach(([shade, color]) => {
    document.documentElement.style.setProperty(
      `--color-primary-${shade}`,
      color
    );
  });
};

export const ColorPicker = () => {
  const [color, setColor] = useState("#3b82f6");
  const [inputValue, setInputValue] = useState("#3b82f6");

  useEffect(() => {
    const shades = generateColorShades(color);
    applyColorShades(shades);
    setInputValue(color);
  }, [color]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (chroma.valid(value)) {
      setColor(chroma(value).hex());
    }
  };

  return (
    <div className="grid grid-cols-2 gap-8 items-start">
      <div className="space-y-4">
        <HexColorPicker
          className="w-full max-w-[240px]"
          color={color}
          onChange={setColor}
        />
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter hex or hsla value"
          className="max-w-[240px]"
        />
      </div>
      <div className="grid grid-cols-1 gap-2">
        {[
          "50",
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "700",
          "800",
          "900",
          "950",
        ].map((shade) => (
          <Swatch
            key={shade}
            color={`var(--color-primary-${shade})`}
            number={shade}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
