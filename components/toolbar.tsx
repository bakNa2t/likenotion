"use client";

import { IconPicker } from "./icon-picker";

import { Doc } from "@/convex/_generated/dataModel";
import { Button } from "./ui/button";
import { Smile, X } from "lucide-react";

interface ToolbarProps {
  initialData: Doc<"documents">;
  preview?: boolean;
}

export const Toolbar = ({ initialData, preview }: ToolbarProps) => {
  return (
    <div className="pl-[54px] group relative">
      {!!initialData.icon && !preview && (
        <div className="flex items-center gap-x-2 group/icon pt-6">
          <IconPicker onChange={() => {}}>
            <p className="text-6xl hover:opacity-75 transition">
              {initialData.icon}
            </p>
          </IconPicker>

          <Button
            size="icon"
            variant="outline"
            onClick={() => {}}
            className="rounded-full opacity-0 group-hover/icon:opacity-100 transition text-muted-foreground"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}

      {!!initialData.icon && preview && (
        <p className="text-6xl pt-6">{initialData.icon}</p>
      )}

      <div className="flex items-center gap-x-1 py-4 opacity-0 group-hover:opacity-100">
        {!initialData.icon && !preview && (
          <IconPicker onChange={() => {}} asChild>
            <Button
              size="sm"
              variant="outline"
              className="text-xs text-muted-foreground"
            >
              <Smile className="w-4 h-4 mr-2" />
              Add icon
            </Button>
          </IconPicker>
        )}
      </div>
    </div>
  );
};
