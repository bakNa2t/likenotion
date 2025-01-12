"use client";

import { LucideIcon } from "lucide-react";

interface ItemProps {
  label: string;
  onClick: () => void;
  icon: LucideIcon;
}
export const Item = ({ label, onClick, icon: Icon }: ItemProps) => {
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
