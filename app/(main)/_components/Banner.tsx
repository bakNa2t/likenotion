"use client";

import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/ConfirmModal";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface BannerProps {
  documentId: Id<"documents">;
}

export const Banner = ({ documentId }: BannerProps) => {
  const router = useRouter();
  const t = useTranslations("Documents");

  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  const onRemove = () => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: t("toast.loadingDelete"),
      success: t("toast.successDelete"),
      error: t("toast.errorDelete"),
    });

    router.push("/documents");
  };

  const onRestore = () => {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: t("toast.loadingRestore"),
      success: t("toast.successRestore"),
      error: t("toast.errorRestore"),
    });
  };

  return (
    <div className="w-full flex items-center justify-center gap-x-2 p-2 text-white text-sm text-center bg-rose-600/70 backdrop-filter backdrop-blur-sm">
      <p>{t("bannerTitle")}</p>

      <Button
        variant="outline"
        size="sm"
        onClick={onRestore}
        className="p-1 px-2 h-auto font-normal border-white text-white bg-transparent hover:bg-primary/5 hover:text-white"
      >
        {t("restoreDoc")}
      </Button>

      <ConfirmModal onConfirm={onRemove}>
        <Button
          variant="outline"
          size="sm"
          className="p-1 px-2 h-auto font-normal border-white text-white bg-transparent hover:bg-primary/5 hover:text-white"
        >
          {t("delPermanently")}
        </Button>
      </ConfirmModal>
    </div>
  );
};
