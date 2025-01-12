"use client";

import { LucideIcon } from "lucide-react";

import { Id } from "@/convex/_generated/dataModel";

interface ItemProps {
  id?: Id<"documents">;
  ducumentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  onClick: () => void;
  icon: LucideIcon;
}
export const Item = ({
  id,
  label,
  onClick,
  icon: Icon,
  active,
  documentIcon,
  isSearch,
  level = 0,
  expanded,
  onExpand,
}: ItemProps) => {
  return (
    <div
      role="button"
      onClick={onClick}
      style={{ paddingLeft: "12px" }}
      className="group min-h-[27px] w-full flex items-center py-1 pr-3 text-sm text-muted-foreground font-medium hover:bg-primary/5"
    >
      <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
      <span className="truncate">{label}</span>
    </div>
  );
};
