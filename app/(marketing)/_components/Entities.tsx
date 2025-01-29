import Image from "next/image";
import React from "react";

export const Entities = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center gap-x-14">
        <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px]">
          <Image
            src="task.svg"
            fill
            className="object-contain dark:hidden"
            alt="task"
          />
          <Image
            src="task-dark.svg"
            fill
            className="object-contain hidden dark:block"
            alt="task"
          />
        </div>

        <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] hidden md:block">
          <Image
            src="squad.svg"
            fill
            className="object-contain dark:hidden"
            alt="squad"
          />
          <Image
            src="squad-dark.svg"
            fill
            className="object-contain hidden dark:block"
            alt="squad"
          />
        </div>
      </div>
    </div>
  );
};
