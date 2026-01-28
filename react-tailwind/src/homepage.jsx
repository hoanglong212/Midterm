import { useState } from 'react'
import Navbar from './HomepageComponent/navBar'
import wand from './assets/mdi_wand.png'
import CTAbutton from './Button/CTAbutton'
import star from './assets/star.png'
import starbig from './assets/star-big.png'
import biglogo from './assets/biglogo.png'
import Video from './FeatureComponents/video'
import GenBTN from './Button/GenBTN'
import StarEffect from './HomepageComponent/starEffect'

export default function Homepage() {
  return (
    <div className="h-509 bg-black ">
      <Navbar></Navbar>
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
          <GenBTN context={'Start Generating'}></GenBTN>
          <CTAbutton context={'download'}></CTAbutton>
        </div>
        <StarEffect></StarEffect>
      </div>
      <img
        src={biglogo}
        alt=""
        className="w-400 h-240 absolute top-20  left-0 pointer-events-none "
      />
      <div className="mt-40">
        <Video />
      </div>
    </div>
  )
}
