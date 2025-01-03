import Image from "next/image";
import React from "react";

export const Entities = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image src="task.svg" fill className="object-contain" alt="task" />
        </div>

        <div className="relative w-[400px] h-[400px] hidden md:block">
          <Image src="squad.svg" fill className="object-contain" alt="squad" />
        </div>
      </div>
    </div>
  );
};
