"use client";

import { useTheme } from "next-themes";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";

import "@blocknote/core/style.css";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";

import { Id } from "@/convex/_generated/dataModel";
import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  initialContent?: string;
  editable?: boolean;
  params: Promise<{ documentId: Id<"documents"> }>;
  onChange: (value: string) => void;
}

const Editor = ({ initialContent, editable, onChange }: EditorProps) => {
  const { resolvedTheme } = useTheme();

  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const res = await edgestore.publicFiles.upload({
      file,
    });

    return res.url;
  };

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
  });

  const uploadToDatabase = () => {
    if (onChange) {
      onChange(JSON.stringify(editor.document, null, 2));
    }
  };

  return (
    <div className="pr-8 md:pr-4">
      <BlockNoteView
        editable={editable}
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={uploadToDatabase}
      />
    </div>
  );
};

export default Editor;
