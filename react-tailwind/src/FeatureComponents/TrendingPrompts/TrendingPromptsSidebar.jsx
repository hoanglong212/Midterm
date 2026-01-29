export default function TrendingPromptsSidebar() {
  return (
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
  )
}
