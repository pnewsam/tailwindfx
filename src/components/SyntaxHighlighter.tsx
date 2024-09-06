import { Prism as ReactSyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

export const SyntaxHighlighter = ({ code }: { code: string }) => {
  return (
    <ReactSyntaxHighlighter
      style={nord}
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
