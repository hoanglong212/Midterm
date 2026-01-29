export default function FooterBottomBar() {
  return (
    <div className="mt-20 flex flex-col md:flex-row items-center justify-between text-sm text-white/40 gap-4">
      <div className="flex gap-6">
        <span>Copyright</span>
        <span>Privacy</span>
        <span>All rights reserved</span>
      </div>

      <div>© 2024 — Promptverse AI</div>

      <div className="flex gap-4">
        <span className="text-white">En</span>
        <span className="hover:text-white cursor-pointer">Es</span>
      </div>
    </div>
  )
}
