export default function TrendingPromptsGrid() {
  const promptCards = [
    { text: '"Explain quantum computing in simple terms"', type: 'quote' },
    { text: 'Remembers what user said earlier in the conversation.', type: 'normal' },
    { text: 'May occasionally generate incorrect information.', type: 'normal' },
    { text: '"Got any creative ideas for a 10year old\'s birthday?"', type: 'quote' },
    { text: 'Allows user to provide follow-up corrections.', type: 'normal' },
    { text: 'Trained to decline inappropriate requests.', type: 'normal' },
  ]

  return (
    <div className="grid grid-cols-3 gap-12 mt-20">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-3 rounded-xl bg-white/5 border border-white/10 p-4 text-sm">
          {promptCards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-md bg-white/5 px-3 py-2 ${
                card.type === 'quote' ? 'font-poppins text-[13px]' : ''
              }`}
            >
              {card.text}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
