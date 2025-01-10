"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const DocumentsPage = () => {
  const { user } = useUser();

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
      <Button>
        <PlusCircle className="w-4 h-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
