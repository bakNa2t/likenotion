"use client";

import Image from "next/image";

const DocumentsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4">
      <Image
        src="/blank.svg"
        width="300"
        height="300"
        alt="blank"
        className="dark:hidden"
      />
      <Image
        src="/blank-dark.svg"
        width="300"
        height="300"
        alt="blank"
        className="hidden dark:block"
      />
    </div>
  );
};

export default DocumentsPage;
