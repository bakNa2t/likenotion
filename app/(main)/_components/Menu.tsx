"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { MoreHorizontal, Trash, X } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";

interface MenuProps {
  documentId: Id<"documents">;
}

export const Menu = ({ documentId }: MenuProps) => {
  const router = useRouter();
  const { user } = useUser();
  const t = useTranslations("Documents");

  const archive = useMutation(api.documents.archive);

  const onClose = () => {
    router.push("/documents");
  };

  const onArchive = () => {
    const promise = archive({ id: documentId });

    toast.promise(promise, {
      loading: t("toast.loadingMove"),
      success: t("toast.successMove"),
      error: t("toast.errorMove"),
    });

    router.push("/documents");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-60"
        align="end"
        alignOffset={8}
        forceMount
      >
        <DropdownMenuItem
          onClick={onClose}
          role="button"
          className="hover:cursor-pointer"
        >
          <X className="w-4 h-4 mr-2" />
          {t("close")}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={onArchive}
          role="button"
          className="hover:cursor-pointer"
        >
          <Trash className="w-4 h-4 mr-2" />
          {t("delete")}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <div className="text-xs text-muted-foreground p-2">
          {t("editedBy")} {user?.fullName}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

Menu.Skeleton = function MenuSkeleton() {
  return <Skeleton className="w-10 h-6" />;
};
