"use client";

import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // You can choose a different theme
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import { formatCode } from "@/utils/formatCode";

interface SyntaxHighlighterProps {
  code: string;
  language: string;
}

export function SyntaxHighlighter({ code, language }: SyntaxHighlighterProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      formatCode(code).then((formattedCode) => {
        if (codeRef.current) {
          codeRef.current.textContent = formattedCode;
          Prism.highlightElement(codeRef.current);
        }
      });
    }
  }, [code]);

  return (
    <pre className="rounded-md">
      <code ref={codeRef} className={`language-${language}`}>
        {code.trim()}
      </code>
    </pre>
  );
}
