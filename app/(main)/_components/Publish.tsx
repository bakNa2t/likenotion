"use client";

import { useMutation } from "convex/react";

import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useOrigin } from "@/hooks/useOrigin";
import { useState } from "react";

interface PublishProps {
  initialData: Doc<"documents">;
}

export const Publish = ({ initialData }: PublishProps) => {
  const [copied, setCopied] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const origin = useOrigin();
  const update = useMutation(api.documents.update);

  const url = `${origin}/preview/${initialData._id}`;

  return <div>Publish</div>;
};
