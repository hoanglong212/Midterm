import GenButton from '../Button/GenButton'
import CTAButton from '../Button/CTAbutton'
import StarEffect from './StarEffect'

export default function HeroSection() {
  return (
    <div className="flex flex-col text-white w-219.5 h-118 justify-center text-center items-center ml-auto mr-auto gap-6 mt-50 ">
      <span className="font-semibold font-manrope text-[22px] tracking-[-0.018em]">
        Promptverse AI
      </span>
      <span className="font-manrope text-[64px] leading-18.5 tracking-[-0.01em] w-168.5">
        Find Inspiration. Create, Generate, Produce & Automate.
      </span>
      <span className="font-manrope text-[16px] leading-7 tracking[-0.0.18em] text-white/60 w-183.75">
        Welcome to PromptVerse. Effortlessly create content, explore endless prompts, and stay
        ahead with real-time trends. Automate emails, social media, and more while our AI extracts
        knowledge from any document or URL. Experience a stunning, futuristic design that boosts
        productivity.
      </span>
      <div className="inline-flex items-center gap-3  mt-6    ">
        <GenButton context={'Start Generating'}></GenButton>
        <CTAButton context={'download'}></CTAButton>
      </div>
      <StarEffect></StarEffect>
    </div>
  )
}
