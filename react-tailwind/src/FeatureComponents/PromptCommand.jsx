import { Search, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'

export default function TrendingPromptsPage() {
  return (
    <div className="w-327 h-310 bg-[#0E0E0E] text-white flex rounded-xl overflow-hidden font-manrope pb-10 ml-auto mr-auto mt-31">
      {/* Sidebar */}
      <aside className="w-65 bg-[#0f0f0f] border-r border-white/10 p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-6 font-poppins">
          <div className="relative w-6 h-6">
            <span className="absolute inset-0 rotate-45">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
            </span>
          </div>

          <span className="font-semibold tracking-[-0.01em]">Promptverse AI</span>
        </div>

        <button className="mb-4 rounded-lg bg-[#c9c7ff] text-black py-2 text-sm font-poppins font-medium">
          + New chat
        </button>

        <nav className="flex-1 space-y-2 text-sm flex flex-col gap-4 mt-10">
          <div className="text-[#6aa8ff] font-poppins font-medium">AI Chat Tool Intro</div>
          <div className="text-white/60">AI Chat Tool Impact Writing</div>
          <div className="text-white/60">New chat</div>
        </nav>

        <div className="mt-auto space-y-3 text-sm text-white/60 gap-4 flex flex-col">
          <div>Community</div>
          <div>Light mode</div>
          <div>My account</div>
          <div>Updates & FAQ</div>
          <div>Log out</div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 relative">
        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <input
              placeholder="Search Prompts"
              className="w-full h-12 rounded-full bg-white/5 border border-white/10 pl-12 pr-4 text-sm outline-none focus:border-white/30 font-manrope"
            />
            <Search className="w-5 h-5 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6 mt-20">
          <div className="flex items-center gap-2 font-poppins">
            <Sparkles className="w-4 h-4" />
            <h2 className="font-semibold tracking-[-0.01em]">Trending Prompts</h2>
          </div>
          <div className="text-xs text-white/40">
            Promptverse AI &gt; Community &gt; Trending prompts
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-12 mt-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="space-y-3 rounded-xl bg-white/5 border border-white/10 p-4 text-sm"
            >
              <div className="rounded-md bg-white/5 px-3 py-2 font-poppins text-[13px]">
                "Explain quantum computing in simple terms"
              </div>
              <div className="rounded-md bg-white/5 px-3 py-2">
                Remembers what user said earlier in the conversation.
              </div>
              <div className="rounded-md bg-white/5 px-3 py-2">
                May occasionally generate incorrect information.
              </div>
              <div className="rounded-md bg-white/5 px-3 py-2 font-poppins text-[13px]">
                "Got any creative ideas for a 10year old's birthday?"
              </div>
              <div className="rounded-md bg-white/5 px-3 py-2">
                Allows user to provide follow-up corrections.
              </div>
              <div className="rounded-md bg-white/5 px-3 py-2">
                Trained to decline inappropriate requests.
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-white/60 font-poppins pt-10">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-white">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>…</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </main>
    </div>
  )
}
