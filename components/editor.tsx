"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { useMutation } from "convex/react";
import { Block, BlockNoteEditor } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import { toast } from "sonner";

import "@blocknote/core/style.css";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";

import { Button } from "./ui/button";

import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  initialContent?: string;
  editable?: boolean;
  params: {
    documentId: Id<"documents">;
  };
  onChange: (value: string) => void;
}

const Editor = ({ initialContent, editable, params }: EditorProps) => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [value, setValue] = useState<string>(
    initialContent ? initialContent : ""
  );
  console.log(value);

  const update = useMutation(api.documents.update);

  const { resolvedTheme } = useTheme();

  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const res = await edgestore.publicFiles.upload({
      file,
    });

    return res.url;
  };

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    uploadFile: handleUpload,
  });

  const onSubmit = () => {
    setValue(JSON.stringify(blocks, null, 2));

    const promise = update({
      id: params.documentId,
      content: JSON.stringify(blocks, null, 2),
    });

    toast.promise(promise, {
      loading: "Saving note...",
      success: "Note saved successfully!",
      error: "Failed to save note",
    });
  };

  return (
    <div>
      <BlockNoteView
        editable={editable}
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={() => setBlocks(editor.document)}
      />

      <div className="flex justify-end items-center w-full">
        <Button onClick={onSubmit} className="mt-4">
          Save
        </Button>
      </div>
    </div>
  );
};

export default Editor;
