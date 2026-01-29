import CTAButton from '../Button/CTAButton'
import GenButton from '../Button/GenButton'

export default function SeeTrendingPrompt() {
  return (
    <>
      <div className="flex flex-col w-208 h-63 justify-center items-center text-center ml-auto mr-auto gap-7">
        <span className="text-[48px] tracking-[-0.01em] leading-14">See Trending Prompts</span>
        <span className="text-[16px] tracking-[-0.018em] leading-7.2 text-white/60">
          Discover endless creativity with PromptVerse. Generate diverse content effortlessly using
          prompts. Stay updated with real-time trends, automate tasks, and extract insights from any
          document or URL. All within a sleek, futuristic design. Create more, effortlessly.
        </span>
        <div className="gap-7 flex">
          <GenButton context={'Start Generating'}></GenButton>
          <CTAButton context={'Download'}></CTAButton>
        </div>
      </div>
    </>
  )
}
