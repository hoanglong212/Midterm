import CTAButton from '../Button/CTAButton'
import decor from '../assets/decor.png'

export default function CreateAccount() {
  return (
    <>
      <div
        className="w-280 h-121 flex justify-center items-center bg-[#0E0E0E] 
  mx-auto rounded-2xl mt-60 relative overflow-hidden"
      >
        {/* BLUR BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 pointer-events-none">
            <div className="glow glow-a" />
            <div className="glow glow-b" />
          </div>
        </div>

        {/* DECOR */}
        <div className="absolute inset-0">
          <img src={decor} className="w-11 h-11 absolute top-10 left-60" />
          <img src={decor} className="w-50 h-50 absolute -top-4 -left-4" />
          <img src={decor} className="w-15.5 h-15.5 absolute top-10 right-20" />
          <img src={decor} className="w-12 h-12 absolute bottom-20 right-60" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 text-white text-center">
          <span className="text-[36px] tracking-[-0.01em] leading-14 block w-200">
            Promptverse has no limitation.
            <br />
            Get Started in a journey with promptverse.
          </span>

          <div className="flex justify-center mt-10">
            <CTAButton context="Create an Account" />
          </div>
        </div>
      </div>
    </>
  )
}
