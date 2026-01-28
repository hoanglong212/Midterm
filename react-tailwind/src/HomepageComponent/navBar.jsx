import { useState } from 'react'
import vector from '../assets/Vector.png'
import CTAbutton from '../Button/CTAbutton'

export default function Navbar() {
  return (
    <div className="bg-[#050505] text-white p-6 text-3xl border-b border-white/20 min-w-max h-26.25 flex justify-between items-center pl-16 pr-16">
      <div className="flex  font-poppins text-sm gap-6">
        <span>About</span>
        <span>Technologies</span>
        <span>Products</span>
        <span>Discover</span>
      </div>
      <div className="flex gap-4 w-[203.75px]">
        <div className="relative w-6 h-6">
          <span className="absolute inset-0 rotate-45">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
          </span>
        </div>

        <div className="font-manrope flex gap-2 text-[22px]">
          <span>Promptverse</span>
          <span>AI</span>
        </div>
      </div>
      <div className="flex  font-poppins text-sm gap-6 items-center">
        <span>Team</span>
        <span>Pricing</span>
        <span>Buy Premium</span>
        <CTAbutton context={'Get Started'} />
      </div>
    </div>
  )
}
