"use client";

export const Navigation = () => {
  return (
    <>
      <aside className="relative group/sidebar w-60 h-full flex flex-col bg-secondary overflow-y-auto z-[99999]">
        <div>
          <p>Action items</p>
        </div>

        <div className="mt-4">
          <p>Documents</p>
        </div>

        <div className="absolute top-0 right-0 opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize h-full w-1 bg-primary/10" />
      </aside>
    </>
  );
};
