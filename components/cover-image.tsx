"use client";

import Image from "next/image";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { ImageIcon, X } from "lucide-react";

import { Button } from "./ui/button";

import { cn } from "@/lib/utils";
import { api } from "@/convex/_generated/api";
import { useCoverImage } from "@/hooks/useCoverImage";
import { useEdgeStore } from "@/lib/edgestore";
import { Id } from "@/convex/_generated/dataModel";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

export const CoverImage = ({ url, preview }: CoverImageProps) => {
  const params = useParams();
  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();

  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  const onRemove = async () => {
    if (url) {
      await edgestore.publicFiles.delete({
        url: url,
      });
    }

    removeCoverImage({
      id: params.documentId as Id<"documents">,
    });
  };

  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted"
      )}
    >
      {!!url && <Image src={url} alt="Cover" fill className="object-cover" />}

      {url && !preview && (
        <div className="absolute bottom-5 right-5 flex items-center gap-x-2 opacity-0 group-hover:opacity-100">
          <Button
            size="sm"
            variant="outline"
            onClick={coverImage.onOpen}
            className="text-muted-foreground text-xs"
          >
            <ImageIcon className="w-4 h-4 mr-1" />
            Change cover
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={onRemove}
            className="text-muted-foreground text-xs"
          >
            <X className="w-4 h-4 mr-1" />
            Remove cover
          </Button>
        </div>
      )}
    </div>
  );
};
