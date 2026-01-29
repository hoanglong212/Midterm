import Card from '../card'
import CTAButton from '../../Button/CTAButton'
import thumbnail from '../../assets/album.jpg'

export default function GenAudioContent() {
  return (
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
          <CTAButton context="Generate now" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/2 relative">
        <img src={thumbnail} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}
