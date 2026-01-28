export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Glow background (nếu đã có thì bỏ phần này) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow glow-a" />
        <div className="glow glow-b" />
      </div>

      <div className="relative z-10 max-w-350 mx-auto px-8 pt-20 pb-10">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Navigation */}
          <div>
            <p className="text-sm text-white/40 mb-6">Navigation</p>
            <ul className="space-y-3 text-white/80">
              {['Schedule', 'Courses', 'Pricing', 'Payment', 'Study In Spain', 'Books'].map(
                (item) => (
                  <li key={item} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* About */}
          <div>
            <p className="text-sm text-white/40 mb-6">About school</p>
            <ul className="space-y-3 text-white/80">
              {['Gallery', 'News', 'Contacts'].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm text-white/40 mb-6">Contact us</p>
            <div className="space-y-2 text-white/80">
              <p>+1 (406) 555-0120</p>
              <p>+1 (480) 555-0103</p>
              <p className="mt-4">help@promptverse.com</p>
            </div>

            <p className="text-sm text-white/40 mt-8 mb-4">Follow us</p>
            <div className="flex gap-4">
              {['f', 'G+', 'IG', 'YT'].map((icon) => (
                <div
                  key={icon}
                  className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:border-white hover:text-white cursor-pointer transition"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Chat */}
          <div>
            <p className="text-sm text-white/40 mb-6">Let’s chat</p>
            <div className="flex gap-4">
              {['💬', '✈️', '📱'].map((icon) => (
                <div
                  key={icon}
                  className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:border-white hover:text-white cursor-pointer transition"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LOCATION */}
        <div className="mt-20 text-center">
          <p className="text-sm text-white/40 mb-2">Location</p>
          <p className="text-white/70">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
        </div>

        {/* BOTTOM BAR */}
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
      </div>
    </footer>
  )
}
