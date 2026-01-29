import Homepage from './homepage'
import Features from './features'
import Footer from './footer'

export default function Website() {
  return (
    <div className="flex flex-col bg-black">
      <Homepage />
      <Features />
      <Footer />
    </div>
  )
}
