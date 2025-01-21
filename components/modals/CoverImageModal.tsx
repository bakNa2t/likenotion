"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useMutation } from "convex/react";

import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";

import { useEdgeStore } from "@/lib/edgestore";
import { useCoverImage } from "@/hooks/useCoverImage";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export const CoverImageModal = () => {
  const params = useParams();
  const [file, setFile] = useState<File>();
  const [isSubmiting, setIsSubmiting] = useState(false);

  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();

  const update = useMutation(api.documents.update);

  const onChange = async (file?: File) => {
    if (file) {
      setIsSubmiting(true);
      setFile(file);

      const res = await edgestore.publicFiles.upload({
        file,
      });

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url,
      });
    }
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-lg text-center font-semibold">Cover Image</h2>
        </DialogHeader>

        <div className="">TODO: Upload image</div>
      </DialogContent>
    </Dialog>
  );
};
