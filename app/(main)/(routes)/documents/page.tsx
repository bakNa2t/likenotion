"use client";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import Image from "next/image";
import { PlusCircle } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" });

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "Note created successfully!",
      error: "Failed to create a note",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4">
      <Image
        src="/blank.svg"
        width="300"
        height="300"
        alt="blank"
        className="dark:hidden"
      />
      <Image
        src="/blank-dark.svg"
        width="300"
        height="300"
        alt="blank"
        className="hidden dark:block"
      />

      <h2 className="text-lg font-semibold">
        Welcome to {user?.firstName}&apos;s Likenotion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="w-4 h-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
