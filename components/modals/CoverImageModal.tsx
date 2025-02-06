"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useMutation } from "convex/react";
import { useTranslations } from "next-intl";

import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { SingleImageDropzone } from "../single-image-dropzone";

import { useEdgeStore } from "@/lib/edgestore";
import { useCoverImage } from "@/hooks/useCoverImage";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export const CoverImageModal = () => {
  const params = useParams();
  const [file, setFile] = useState<File>();
  const [isSubmiting, setIsSubmiting] = useState(false);

  const t = useTranslations("DropdownMenu");
  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();

  const update = useMutation(api.documents.update);

  const onClose = () => {
    setFile(undefined);
    setIsSubmiting(false);
    coverImage.onClose();
  };

  const onChange = async (file?: File) => {
    if (file) {
      setIsSubmiting(true);
      setFile(file);

      const res = await edgestore.publicFiles.upload({
        file,
        options: {
          replaceTargetUrl: coverImage.url,
        },
      });

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url,
      });

      onClose();
    }
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-lg text-center font-semibold">
            {t("coverImageTitle")}
          </h2>
        </DialogHeader>

        <SingleImageDropzone
          value={file}
          onChange={onChange}
          disabled={isSubmiting}
          className="w-full outline-none"
        />
      </DialogContent>
    </Dialog>
  );
};
