import Navbar from './HomepageComponent/Navbar'
import HeroSection from './HomepageComponent/HeroSection'
import biglogo from './assets/biglogo.png'
import Video from './FeatureComponents/Video'

export default function Homepage() {
  return (
    <div className="h-509 bg-black ">
      <Navbar />
      <HeroSection />
      <img src={biglogo} alt="" className="w-400 h-240 absolute top-20  left-0 pointer-events-none " />
      <div className="mt-40">
        <Video />
      </div>
    </div>
  )
}
