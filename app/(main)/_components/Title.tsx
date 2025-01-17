"use client";

import { useState } from "react";
import { useMutation } from "convex/react";

import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";

interface TitleProps {
  initialDate: Doc<"documents">;
}

export const Title = ({ initialDate }: TitleProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const update = useMutation(api.documents.update);

  return (
    <div className="flex items-center gap-x-1">
      {!!initialDate && <p>{initialDate.icon}</p>}
    </div>
  );
};
