import { Search, Sparkles } from 'lucide-react'

export default function TrendingPromptsHeader() {
  return (
    <>
      <div className="mb-8">
        <div className="relative">
          <input
            placeholder="Search Prompts"
            className="w-full h-12 rounded-full bg-white/5 border border-white/10 pl-12 pr-4 text-sm outline-none focus:border-white/30 font-manrope"
          />
          <Search className="w-5 h-5 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="flex items-center justify-between mb-6 mt-20">
        <div className="flex items-center gap-2 font-poppins">
          <Sparkles className="w-4 h-4" />
          <h2 className="font-semibold tracking-[-0.01em]">Trending Prompts</h2>
        </div>
        <div className="text-xs text-white/40">
          Promptverse AI &gt; Community &gt; Trending prompts
        </div>
      </div>
    </>
  )
}
