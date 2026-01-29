import Homepage from './Homepage'
import Features from './Features'
import Footer from './Footer'

export default function Website() {
  return (
    <div className="flex flex-col bg-black">
      <Homepage />
      <Features />
      <Footer />
    </div>
  )
}
