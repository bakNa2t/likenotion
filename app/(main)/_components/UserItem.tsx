"use client";

import { ChevronsLeftRight } from "lucide-react";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { useTranslations } from "next-intl";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserItem = () => {
  const { user } = useUser();

  const t = useTranslations("Documents");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center text-sm p-3 w-full hover:bg-primary/5"
        >
          <div className="flex items-center gap-x-2 max-w-[150px]">
            <Avatar className="w-6 h-6">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              {user?.fullName}&apos;s Likenotion
            </span>
          </div>
          <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground w-4 h-4" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={10}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            {user?.emailAddresses[0].emailAddress}
          </p>

          <div className="flex items-center dap-x-2">
            <div className="rounded-md bg-secondary p-1">
              <Avatar className="w-8 h-8">
                <AvatarImage src={user?.imageUrl} />
              </Avatar>
            </div>

            <div className="space-y-1">
              <p className="text-sm line-clamp-1">
                {user?.fullName}&apos;s Likenotion
              </p>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          asChild
          className="w-full text-muted-foreground cursor-pointer"
        >
          <SignOutButton>{t("signOut")}</SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
