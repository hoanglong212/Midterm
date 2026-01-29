import FooterNavigation from './FooterNavigation'
import FooterAbout from './FooterAbout'
import FooterContact from './FooterContact'
import FooterSocial from './FooterSocial'
import FooterChat from './FooterChat'
import FooterLocation from './FooterLocation'
import FooterBottomBar from './FooterBottomBar'

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden ">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow glow-a" />
        <div className="glow glow-b" />
      </div>

      <div className="relative z-10 max-w-350 mx-auto px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <FooterNavigation />
          <FooterAbout />
          <div>
            <FooterContact />
            <FooterSocial />
          </div>
          <FooterChat />
        </div>

        <FooterLocation />
        <FooterBottomBar />
      </div>
    </footer>
  )
}
