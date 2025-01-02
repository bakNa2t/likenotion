import { Button } from "@/components/ui/button";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <h1 className="text-3xl bold">Likenotion - clone of Notion</h1>
        <Button>Get started</Button>
      </div>
    </div>
  );
};

export default MarketingPage;
