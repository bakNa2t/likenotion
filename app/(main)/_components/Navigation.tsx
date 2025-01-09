"use client";

import { ChevronsLeft } from "lucide-react";

export const Navigation = () => {
  return (
    <>
      <aside className="relative group/sidebar w-60 h-full flex flex-col bg-secondary overflow-y-auto z-[99999]">
        <div
          role="button"
          className="absolute top-3 right-2 w-6 h-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 opacity-0 group-hover/sidebar:opacity-100 transition"
        >
          <ChevronsLeft className="w-6 h-6" />
        </div>

        <div>
          <p>Action items</p>
        </div>

        <div className="mt-4">
          <p>Documents</p>
        </div>

        <div className="absolute top-0 right-0 opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize h-full w-1 bg-primary/10" />
      </aside>
    </>
  );
};
