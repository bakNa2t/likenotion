import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50">
      <Logo />
      <div className="flex items-center gap-x-2 md:ml-auto w-full justify-between md:justify-end">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms of Service
        </Button>
      </div>
    </div>
  );
}
