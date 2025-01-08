"use client";

import { useConvexAuth } from "convex/react";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/spinner";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        {" "}
        Your Ideas💡, Documents📕, & Plans🚀. Welcome to{" "}
        <span className="underline">Likenotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Likenotion is the connected workspace where <br />
        better, faster work happens
      </h3>

      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}

      {!isAuthenticated && !isLoading && (
        <Button>
          Get started
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      )}
    </div>
  );
};
