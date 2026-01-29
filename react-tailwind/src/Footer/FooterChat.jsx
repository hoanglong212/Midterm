export default function FooterChat() {
  const chatIcons = ['💬', '✈️', '📱']

  return (
    <div>
      <p className="text-sm text-white/40 mb-6">Let's chat</p>
      <div className="flex gap-4">
        {chatIcons.map((icon) => (
          <div
            key={icon}
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:border-white hover:text-white cursor-pointer transition"
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  )
}
