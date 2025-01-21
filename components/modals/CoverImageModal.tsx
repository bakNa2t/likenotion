"use client";

import { useCoverImage } from "@/hooks/useCoverImage";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";

export const CoverImageModal = () => {
  const coverImage = useCoverImage();

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
