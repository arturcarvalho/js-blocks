import Editor from "@monaco-editor/react";

const MonEditor = () => {
  return (
    <Editor
      height="80vh"
      defaultLanguage="markdown"
      defaultValue={`# title
       some other line`}
      options={{
        minimap: {
          enabled: false,
        },
        scrollbar: {
          vertical: "auto",
        },
        lineNumbers: false,
        // Chevron to expand/collapse areas
        folding: false,
        // Indentation lines
        renderIndentGuides: false,
      }}
    />
  );
};

export default MonEditor;
