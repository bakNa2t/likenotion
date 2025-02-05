"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useTranslations } from "next-intl";

const DocumentsPage = () => {
  const router = useRouter();
  const t = useTranslations("Documents");

  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "Note created successfully!",
      error: "Failed to create a note",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4">
      <Image
        src="blank.svg"
        width="250"
        height="250"
        alt="blank"
        className="dark:hidden"
      />
      <Image
        src="blank-dark.svg"
        width="250"
        height="250"
        alt="blank"
        className="hidden dark:block"
      />

      <h2 className="text-lg font-semibold">
        {t("welcome")} {user?.firstName}&apos;s Likenotion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="w-4 h-4 mr-2" />
        {t("createBtn")}
      </Button>
    </div>
  );
};

export default DocumentsPage;
