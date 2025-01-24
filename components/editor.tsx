"use client";

import "@blocknote/core/style.css";

interface EditorProps {
  initialContent?: string;
  editable?: boolean;
  onChange: (value: string) => void;
}

export const Editor = ({ initialContent, editable, onChange }: EditorProps) => {
  return <div>Editor</div>;
};
