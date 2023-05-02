import ClientSection from "@/components/ClientSection";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4 text-center">
      <h1 className="my-4 text-6xl font-bold">My GPT App</h1>
      <div className="flex flex-col items-center gap-2 font-mono md:flex-row">
        <div className="bg-neuborder-neutral-900 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 dark:bg-white"></div>
      </div>

      <ClientSection />
    </main>
  );
}
