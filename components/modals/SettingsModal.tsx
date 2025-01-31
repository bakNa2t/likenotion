"use client";

import { Label } from "../ui/label";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";

import { useSettings } from "@/hooks/useSettings";
import { ModeToggle } from "../theme-mode-toggle";
import { LangToggle } from "../lang-toggle";

export const SettingsModal = () => {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="pb-3 border-b">
          <h2 className="text-lg font-semibold">My Settings</h2>
        </DialogHeader>

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize Likenotion&apos;s appearance on your device
            </span>
          </div>

          <ModeToggle />
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col gap-y-1">
            <Label>Language</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Chose Likenotion&apos;s language on your device
            </span>
          </div>

          <LangToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
