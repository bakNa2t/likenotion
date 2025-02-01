"use client";

// import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LanguagesIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LangToggle() {
  const [locale, setLocale] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const cookiesLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_TRANSLATION_LOCALE="))
      ?.split("=")[1];

    if (cookiesLocale) {
      setLocale(cookiesLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);

      document.cookie = `NEXT_TRANSLATION_LOCALE=${browserLocale}`;
      router.refresh();
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `NEXT_TRANSLATION_LOCALE=${newLocale}`;
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <LanguagesIcon />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLocale("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale("ru")}>
          Russian
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
