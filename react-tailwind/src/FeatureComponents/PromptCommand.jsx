import TrendingPromptsSidebar from './TrendingPrompts/TrendingPromptsSidebar'
import TrendingPromptsHeader from './TrendingPrompts/TrendingPromptsHeader'
import TrendingPromptsGrid from './TrendingPrompts/TrendingPromptsGrid'
import TrendingPromptsPagination from './TrendingPrompts/TrendingPromptsPagination'

export default function TrendingPromptsPage() {
  return (
    <div className="w-327 h-310 bg-[#0E0E0E] text-white flex rounded-xl overflow-hidden font-manrope pb-10 ml-auto mr-auto mt-31">
      <TrendingPromptsSidebar />

      <main className="flex-1 p-8 relative">
        <TrendingPromptsHeader />
        <TrendingPromptsGrid />
        <TrendingPromptsPagination />
      </main>
    </div>
  )
}
