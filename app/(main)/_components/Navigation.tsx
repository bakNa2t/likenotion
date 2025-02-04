"use client";

import React, { ComponentRef, useEffect, useRef, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
  ChevronsLeft,
  MenuIcon,
  Plus,
  PlusCircle,
  Search,
  Settings,
  Trash,
} from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

import { UserItem } from "./UserItem";
import { Navbar } from "./Navbar";
import { Item } from "./Item";
import { DocumentList } from "./DocumentList";
import { TrashBox } from "./TrashBox";
import { api } from "@/convex/_generated/api";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { useSearch } from "@/hooks/useSearch";
import { useSettings } from "@/hooks/useSettings";

export const Navigation = () => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const create = useMutation(api.documents.create);
  const search = useSearch();
  const settings = useSettings();

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ComponentRef<"aside">>(null);
  const navbarRef = useRef<ComponentRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  const t = useTranslations("Documents");

  useEffect(() => {
    if (isMobile) {
      collapseBar();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapseBar();
    }
  }, [pathname, isMobile]);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;

    if (newWidth < 240) newWidth = 240;
    if (newWidth > 480) newWidth = 480;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`
      );
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapseBar = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const handleCreateNote = () => {
    const promise = create({
      title: "Untitled",
    }).then((documentId) => router.push(`/documents/${documentId}`));

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "Note created successfully!",
      error: "Failed to create a new note",
    });
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
            "absolute top-3 right-2 w-6 h-6 text-muted-foreground rounded-sm hover:bg-neutral-400 dark:hover:bg-neutral-600 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}
          onClick={collapseBar}
        >
          <ChevronsLeft className="w-6 h-6" />
        </div>

        <div>
          <UserItem />
          <Item
            label={`${t("search")}`}
            icon={Search}
            isSearch
            onClick={search.onOpen}
          />
          <Item
            label={`${t("settings")}`}
            icon={Settings}
            onClick={settings.onOpen}
          />
          <Item
            onClick={handleCreateNote}
            label={`${t("page")}`}
            icon={PlusCircle}
          />
        </div>

        <div className="mt-4">
          <DocumentList />
          <Item
            label={`${t("addNew")}`}
            onClick={handleCreateNote}
            icon={Plus}
          />

          <Popover>
            <PopoverTrigger className="w-full mt-4">
              <Item label={`${t("trash")}`} icon={Trash} />
            </PopoverTrigger>
            <PopoverContent
              side={isMobile ? "bottom" : "right"}
              className="w-72 p-0"
            >
              <TrashBox />
            </PopoverContent>
          </Popover>
        </div>

        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className="absolute top-0 right-0 opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize h-full w-1 bg-primary/10"
        />
      </aside>

      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 left-60 w-[calc(100%-240px)] z-[99999]",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile && "left-0 w-full"
        )}
      >
        {!!params.documentId ? (
          <Navbar isCollapsed={isCollapsed} onResetWidth={resetWidth} />
        ) : (
          <nav className="w-full px-3 py-2 bg-transparent">
            {isCollapsed && (
              <MenuIcon
                role="button"
                className="w-6 h-6 text-muted-foreground"
                onClick={resetWidth}
              />
            )}
          </nav>
        )}
      </div>
    </>
  );
};
