"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { Globe } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

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

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="ghost">
          Publish
          {initialData.isPublished && (
            <Globe className="w-4 h-4 ml-2 text-purple-500" />
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-72" align="end" alignOffset={8} forceMount>
        {initialData.isPublished ? (
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Globe className="w-4 h-4 animate-pulse text-purple-500" />
              <p className="text-xs font-medium text-purple-500">
                This note is live on the web
              </p>
            </div>

            <div className="flex items-center">
              <input
                value={url}
                className="flex-1 h-8 px-2 border rounded-l-md text-xs bg-muted truncate"
                disabled
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <Globe className="w-8 h-8 text-muted-foreground mb-2" />
            <p className="text-sm font-medium mb-2">Publish this note</p>

            <span className="text-xs text-muted-foreground mb-4">
              Share your note with the world
            </span>

            <Button
              size="sm"
              className="w-full text-xs"
              onClick={onPublish}
              disabled={isSubmiting}
            >
              Publish
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
