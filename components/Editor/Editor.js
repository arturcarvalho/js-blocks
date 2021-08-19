import Editor from "@monaco-editor/react";

const MonEditor = () => {
  return (
    <Editor
      height="90vh"
      defaultLanguage="markdown"
      defaultValue="# title"
      options={{
        minimap: {
          enabled: false,
        },
      }}
    />
  );
};

export default MonEditor;
