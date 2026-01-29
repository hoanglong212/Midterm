function CTAButton({ context }) {
  return (
    <button
      className="
        group relative
        h-13
        rounded-[55px]
        bg-white
        text-black
        overflow-hidden
        transition-all duration-500 ease-out
        px-6
        hover:pr-12
      "
    >
      <span className="flex items-center gap-2 whitespace-nowrap">
        {context}

        <span
          className="
            absolute right-5
            opacity-0 translate-x-2
            transition-all duration-500
            group-hover:opacity-100 group-hover:translate-x-0
            hover:scale-105

            text-2xl
          "
        >
          →
        </span>
      </span>
    </button>
  )
}

export default CTAButton
