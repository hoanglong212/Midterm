import PromptCard from "../Endlessscroll/card";

export default function ScrollRow({ reverse = false, speed = 30 }) {
  return (
    <div className="overflow-hidden w-full">
      <div
        className="
          flex gap-6 w-max
          hover:[animation-play-state:paused]
        "
        style={{
          animation: `${reverse ? "scroll-x-reverse" : "scroll-x"} ${speed}s linear infinite`,
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <PromptCard key={`a-${i}`} />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <PromptCard key={`b-${i}`} />
        ))}
      </div>
    </div>
  );
}
