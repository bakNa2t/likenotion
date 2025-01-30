import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo-light.svg"
        width="40"
        height="40"
        alt="logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        width="40"
        height="40"
        alt="logo"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold md:text-2xl", font.className)}>
        Likenotion
      </p>
    </div>
  );
};
