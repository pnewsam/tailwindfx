import { Prism as ReactSyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const SyntaxHighlighter = ({ code }: { code: string }) => {
  return (
    <ReactSyntaxHighlighter
      style={oneDark}
      className="text-sm"
      code={code}
      language="markup"
      wrapLines
      wrapLongLines
    >
      {code}
    </ReactSyntaxHighlighter>
  );
};
