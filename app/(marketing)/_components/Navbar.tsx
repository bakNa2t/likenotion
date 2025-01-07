"use client";

import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import { Logo } from "./Logo";

import { ModeToggle } from "@/components/theme-mode-toggle";
import { Spinner } from "@/components/spinner";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#131313] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />

      <div className="w-full flex items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        {isLoading && <Spinner />}
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
            <UserButton />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
