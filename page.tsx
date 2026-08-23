import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f14] p-4 text-[#d7dee7] md:p-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-[#27313d] bg-[#0d1219] shadow-2xl">

        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#27313d] bg-[#111821] px-4 py-3">

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="font-mono text-xs tracking-widest text-[#7f8b99]">
            DEVON-OS
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            ONLINE
          </div>

        </div>

        <Terminal />

      </div>
    </main>
  );
}