"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { MenuIcon } from "lucide-react";

import { Title } from "./Title";
import { Banner } from "./Banner";
import { Menu } from "./Menu";
import { Publish } from "./Publish";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

export const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
  const params = useParams();

  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
  });

  if (document === undefined) {
    return (
      <nav className="w-full flex items-center justify-between px-3 py-2 bg-background/90 dark:bg-[#131313]/90">
        <Title.Skeleton />

        <div className="flex items-center gap-x-2">
          <Menu.Skeleton />
        </div>
      </nav>
    );
  }

  if (document === null) {
    return null;
  }

  return (
    <>
      <nav className="w-full flex items-center gap-x-4 px-3 py-2 bg-background/70 dark:bg-[#131313]/70 backdrop-filter backdrop-blur-sm">
        {isCollapsed && (
          <MenuIcon
            role="button"
            onClick={onResetWidth}
            className="w-6 h-6 text-muted-foreground"
          />
        )}
        <div className="flex items-center justify-between w-full">
          <Title initialDate={document} />

          <div className="flex items-center gap-x-2">
            <Publish initialData={document} />
            <Menu documentId={document._id} />
          </div>
        </div>
      </nav>

      {document.isArchived && <Banner documentId={document._id} />}
    </>
  );
};
