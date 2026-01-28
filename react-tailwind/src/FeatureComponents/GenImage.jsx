import picture1 from '../assets/1.png'
import picture2 from '../assets/2.png'
import picture3 from '../assets/3.png'
import picture4 from '../assets/4.png'
import picture5 from '../assets/5.png'

export default function GenImage() {
  return (
    <>
      <div className="flex flex-col w-208 h-63 justify-center items-center text-center ml-auto mr-auto gap-7">
        <span className="text-[48px] tracking-[-0.01em] leading-14">
          Images like never seen before
        </span>
        <span className="text-[16px] tracking-[-0.018em] leading-7.2 text-white/60">
          Discover endless creativity with PromptVerse. Generate diverse content effortlessly using
          prompts. Stay updated with real-time trends, automate tasks, and extract insights from any
          document or URL. All within a sleek, futuristic design. Create more, effortlessly.
        </span>
      </div>

      <div className="h-140 w-280 ml-auto mr-auto">
        <div className="grid grid-cols-2 gap-4 p-10 bg-[#0E0E0E] rounded-2xl">
          {/* Card lớn */}
          <div className="group relative w-full h-full rounded-xl overflow-hidden cursor-pointer">
            <img src={picture1} alt="" className="w-full h-full object-cover" />

            <div className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] bg-white rounded-full scale-0 transition-transform duration-1800 ease-out group-hover:scale-100 origin-bottom-right" />

            <span className="absolute inset-0 flex items-center justify-center text-black font-manrope text-4xl font-semibold opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-400">
              Generate
            </span>
          </div>

          {/* Cột phải */}
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="grid grid-cols-2 gap-4 h-full">
              <img src={picture2} className="w-full h-full object-cover rounded-xl" />
              <img src={picture3} className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="grid grid-cols-2 gap-4 h-full">
              <img src={picture4} className="w-full h-full object-cover rounded-xl" />
              <img src={picture5} className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
