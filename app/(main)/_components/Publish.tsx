"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useOrigin } from "@/hooks/useOrigin";

interface PublishProps {
  initialData: Doc<"documents">;
}

export const Publish = ({ initialData }: PublishProps) => {
  const [copied, setCopied] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const origin = useOrigin();
  const update = useMutation(api.documents.update);

  const url = `${origin}/preview/${initialData._id}`;

  const onPublish = () => {
    setIsSubmiting(true);

    const promise = update({
      id: initialData._id,
      isPublished: true,
    }).finally(() => setIsSubmiting(false));

    toast.promise(promise, {
      loading: "Publishing note...",
      success: "Note published successfully!",
      error: "Failed to publish note",
    });
  };

  const onUnpublish = () => {
    setIsSubmiting(true);

    const promise = update({
      id: initialData._id,
      isPublished: false,
    }).finally(() => setIsSubmiting(false));

    toast.promise(promise, {
      loading: "Unpublishing note...",
      success: "Note unpublished successfully!",
      error: "Failed to unpublish note",
    });
  };

  const onCopy = () => {
    navigator.clipboard.writeText(url);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return <div>Publish</div>;
};
