"use client";

import { ComponentRef, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronsLeft } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ComponentRef<"aside">>(null);
  const navbarRef = useRef<ComponentRef<"div">>(null);
  const [isReseting, setIsReseting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "relative group/sidebar w-60 h-full flex flex-col bg-secondary overflow-y-auto z-[99999]",
          isReseting && "transition-all duration-300 ease-in-out",
          isMobile && "w-0"
        )}
      >
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
