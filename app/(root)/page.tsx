import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h1 className="text-3xl bold">Likenotion - clone of Notion</h1>
      <Button>Get started</Button>
    </div>
  );
}
