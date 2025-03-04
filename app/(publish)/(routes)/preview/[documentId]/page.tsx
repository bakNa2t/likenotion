"use client";

import dynamic from "next/dynamic";
import { use, useMemo } from "react";
import { useMutation, useQuery } from "convex/react";

import { Toolbar } from "@/components/toolbar";
import { CoverImage } from "@/components/cover-image";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Skeleton } from "@/components/ui/skeleton";

interface DocumentIdPageProps {
  params: Promise<{ documentId: Id<"documents"> }>;
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  const Editor = useMemo(
    () => dynamic(() => import("@/components/editor"), { ssr: false }),
    []
  );

  const { documentId } = use(params);

  const document = useQuery(api.documents.getById, {
    documentId: documentId,
  });

  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      id: documentId,
      content,
    });
  };

  if (document === undefined) {
    return (
      <div>
        <CoverImage.Skeleton />

        <div className="mx-auto mt-10 md:max-w-3xl lg:max-w-4xl">
          <div className="pt-4 pl-8 space-y-4">
            <Skeleton className="w-[50%] h-14" />
            <Skeleton className="w-[80%] h-4" />
            <Skeleton className="w-[40%] h-4" />
            <Skeleton className="w-[60%] h-4" />
          </div>
        </div>
      </div>
    );
  }

  if (document === null) {
    return <div>Not found</div>;
  }

  return (
    <div className="pb-40">
      <CoverImage preview url={document.coverImage} />
      <div className="mx-auto md:max-w-3xl lg:max-w-4xl">
        <Toolbar preview initialData={document} />
        <Editor
          editable={false}
          onChange={onChange}
          initialContent={document.content}
          params={params}
        />
      </div>
    </div>
  );
};

export default DocumentIdPage;
