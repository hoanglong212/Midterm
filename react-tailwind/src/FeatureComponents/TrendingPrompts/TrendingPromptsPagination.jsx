import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TrendingPromptsPagination() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-white/60 font-poppins pt-10">
      <ChevronLeft className="w-4 h-4" />
      <span className="text-white">1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>…</span>
      <ChevronRight className="w-4 h-4" />
    </div>
  )
}
