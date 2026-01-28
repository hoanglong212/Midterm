import Card from './card'
import CTAbutton from '../Button/CTAbutton'
import thumbnail from '../assets/album.jpg'

export default function GenAudio() {
  return (
    <>
      {/* TITLE */}
      <div className="flex flex-col w-208 justify-center items-center text-center mx-auto gap-4 text-white mt-60">
        <span className="text-[48px] tracking-[-0.01em] leading-14">Generate audio and music</span>
        <span className="text-[16px] tracking-[-0.018em] leading-7.2 text-white/60">
          Discover endless creativity with PromptVerse. Generate diverse content effortlessly using
          prompts. Stay updated with real-time trends, automate tasks, and extract insights from any
          document or URL. All within a sleek, futuristic design. Create more, effortlessly.
        </span>
      </div>

      {/* CONTENT */}
      <div className="w-280 bg-[#0E0E0E] text-white rounded-2xl overflow-hidden flex p-10 mx-auto mt-20">
        {/* LEFT */}
        <div className="w-1/2 p-14 flex flex-col justify-center gap-6">
          <h2 className="font-manrope text-[40px] leading-tight font-semibold">
            Enhance Your Projects with Ultra-
            <br />
            Realistic AI Voices
          </h2>

          <p className="text-white/70 text-sm max-w-md">
            Create engaging voice content with unique AI Voices perfect for your audience.
          </p>

          <ul className="text-white/50 text-sm space-y-2 max-w-lg">
            <li>
              Generate Conversational, Long-form or Short-form Voice Content With Consistent Quality
              and Performances.
            </li>
            <li>Secure and Private Voice Generations with Full Commercial and Copyrights</li>
          </ul>

          <div className="flex flex-wrap gap-4 mt-4">
            <Card context="Train voice models" />
            <Card context="Text-to-speech" />
            <Card context="AI voice generation" />
            <Card context="AI music production" />
            <Card context="AI Composition" />
            <CTAbutton context="Generate now" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-1/2 relative">
          <img src={thumbnail} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  )
}
