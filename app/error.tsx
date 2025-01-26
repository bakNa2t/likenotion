"use client";

import Image from "next/image";

const Error = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center space-y-4">
      <Image
        src="/error.svg"
        width="300"
        height="300"
        alt="error"
        className="dark:hidden"
      />

      <Image
        src="/error-dark.svg"
        width="300"
        height="300"
        alt="error"
        className="hidden dark:block"
      />

      <h2 className="text-xl font-medium">Something went wrong!</h2>
    </div>
  );
};

export default Error;
