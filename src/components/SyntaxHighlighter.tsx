import { Prism as ReactSyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const SyntaxHighlighter = ({
  code,
  language = "markup",
}: {
  code: string;
  language?: string;
}) => {
  return (
    <ReactSyntaxHighlighter
      style={oneDark}
      className="text-sm"
      code={code}
      language={language}
      wrapLines
      wrapLongLines
    >
      {code}
    </ReactSyntaxHighlighter>
  );
};
