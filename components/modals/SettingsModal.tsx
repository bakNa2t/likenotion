"use client";

import { Label } from "../ui/label";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { useTranslations } from "next-intl";
import { Settings } from "lucide-react";

import { ModeToggle } from "../theme-mode-toggle";
import { LangToggle } from "../lang-toggle";

import { useSettings } from "@/hooks/useSettings";

export const SettingsModal = () => {
  const settings = useSettings();
  const t = useTranslations("DropdownMenu");

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="pb-3 border-b">
          <div className="flex items-center">
            <Settings className="w-6 h-6 mr-2" />
            <h2 className="text-lg font-semibold">
              {t("modalHeadingSettings")}
            </h2>
          </div>
        </DialogHeader>

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-y-1">
            <Label>{t("appearance")}</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              {t("appearanceDescription")}
            </span>
          </div>

          <ModeToggle />
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col gap-y-1">
            <Label>{t("lang")}</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              {t("langDescription")}
            </span>
          </div>

          <LangToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
