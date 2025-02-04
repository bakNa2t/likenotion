import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className="flex items-center w-full p-6 bg-background dark:bg-[#131313] z-50">
      <div className="flex flex-col items-start gap-y-2 w-full">
        <Logo />
        <p className="hidden md:block text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Likenotion. All rights reserved.
        </p>
      </div>
      <div className="flex items-center gap-x-2 md:ml-auto w-full justify-between md:justify-end">
        <Button variant="ghost" size="sm">
          {t("privacy")}
        </Button>
        <Button variant="ghost" size="sm">
          {t("terms")}
        </Button>
      </div>
    </div>
  );
}
