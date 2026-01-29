import EndlessSection from '../Endlessscroll/endlessScoll'

export default function Video() {
  return (
    <div className="bg-black text-white h-225.5 pt-52.25 ">
      <div className=" flex flex-col w-208.25 ml-auto mr-auto justify-center text-center gap-7">
        <span className="text-[48px] leading-14 tracking-[-0.01em] font-manrope">
          Create more with Promptverse
        </span>
        <span className="text-4 leading-7.2 tracking- [-0.018em] font-poppins text-white/60">
          Discover endless creativity with PromptVerse. Generate diverse content effortlessly using
          prompts. Stay updated with real-time trends, automate tasks, and extract insights from any
          document or URL. All within a sleek, futuristic design. Create more, effortlessly.
        </span>
      </div>
      <div className="mt-20">
        <EndlessSection />
      </div>
    </div>
  )
}
