import * as prettier from "prettier/standalone";
import * as parserHtml from "prettier/parser-html";

export async function formatCode(code: string): Promise<string> {
  try {
    const formattedCode = await prettier.format(code, {
      parser: "html",
      plugins: [parserHtml],
      htmlWhitespaceSensitivity: "ignore",
      printWidth: 80,
    });
    return formattedCode.trim();
  } catch (error) {
    console.error("Error formatting code:", { error });
    return code; // Return original code if formatting fails
  }
}
