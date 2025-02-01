"use client";

import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/theme-mode-toggle";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { LangToggle } from "@/components/lang-toggle";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <nav
      className={cn(
        "fixed flex items-center z-50 bg-background dark:bg-[#131313] top-0 w-full p-4 md:p-6",
        scrolled &&
          "border-b shadow-sm backdrop-filter backdrop-blur-sm bg-background/70 dark:bg-[#131313]/70"
      )}
    >
      <Logo />

      <div className="w-full flex items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        {isLoading && <Spinner size="default" />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
            </SignInButton>

            <SignInButton mode="modal">
              <Button size="sm">Join Likenotion free</Button>
            </SignInButton>
          </>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm">
              <Link href="/documents">Enter Likenotion</Link>
            </Button>
            <UserButton afterSwitchSessionUrl="/" />
          </>
        )}
        <ModeToggle />
        <LangToggle />
      </div>
    </nav>
  );
};
