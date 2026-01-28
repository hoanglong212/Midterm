export default function PromptCard() {
  return (
    <div className="
      relative
      rounded-sm
      bg-white/5
      border border-white/10
      p-6
      text-white
      backdrop-blur-xl
      hover:bg-white/10
      transition
      h-28.5
      w-125
      justify-center
      items-center
    ">
      <p className="text-5 mb-2">
        Write a attractive hero title for the following website
      </p>

      <a
        href="#"
        className="text-blue-400 text-5 flex items-center gap-2"
      >
        https://zeltalabs.com/
        <span className="text-lg">↗</span>
      </a>
    </div>
  );
}

