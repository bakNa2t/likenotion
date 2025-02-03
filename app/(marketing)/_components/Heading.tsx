"use client";

import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  const t = useTranslations("Marketing");

  return (
    <div className="max-w-3xl space-y-4 md:max-w-5xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        {" "}
        {t("heading")}
        <br />
        {t("subheading")} <span className="underline">Likenotion</span>
      </h1>
      <h2 className="text-base sm:text-xl md:text-2xl font-medium">
        {t("description")}
      </h2>

      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}

      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            {t("startBtn")}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      )}

      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            {t("join")}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
