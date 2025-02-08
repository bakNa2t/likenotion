import { Navbar } from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-full dark:bg-[#131313]">
      <Navbar />
      <main className="h-full pt-24 md:pt-40 lg:pt-56">{children}</main>
    </div>
  );
};

export default MarketingLayout;
