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
import { useTranslations } from "next-intl";

export function LangToggle() {
  const [locale, setLocale] = useState<string>("");
  const router = useRouter();

  const t = useTranslations("DropdownMenu");

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
    document.cookie = `NEXT_TRANSLATION_LOCALE=${newLocale};`;
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <LanguagesIcon />
          <span className="sr-only">{t("titleLangMenu")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => changeLocale("en")}
          className={`bg-background rounded-sm ${locale === "en" && "bg-secondary/85"}`}
        >
          {t("en")} <span>| en |</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLocale("ru")}
          className={`bg-background rounded-sm ${locale === "ru" && "bg-secondary/85"}`}
        >
          {t("ru")} <span>| ru |</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
