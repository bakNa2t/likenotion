"use client";

import React, { ComponentRef, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronsLeft, MenuIcon } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ComponentRef<"aside">>(null);
  const navbarRef = useRef<ComponentRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "relative group/sidebar w-60 h-full flex flex-col bg-secondary overflow-y-auto z-[99999]",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile && "w-0"
        )}
      >
        <div
          role="button"
          className={cn(
            "absolute top-3 right-2 w-6 h-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="w-6 h-6" />
        </div>

        <div>
          <p>Action items</p>
        </div>

        <div className="mt-4">
          <p>Documents</p>
        </div>

        <div
          onClick={() => {}}
          onMouseDown={handleMouseDown}
          className="absolute top-0 right-0 opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize h-full w-1 bg-primary/10"
        />
      </aside>

      <div
        className={cn(
          "absolute top-0 left-60 w-[calc(100%-240px)] z-[99999]",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile && "left-0 w-full"
        )}
      >
        <nav className="w-full px-3 py-2 bg-transparent">
          {isCollapsed && (
            <MenuIcon role="button" className="w-6 h-6 text-muted-foreground" />
          )}
        </nav>
      </div>
    </>
  );
};
