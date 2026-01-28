import Homepage from './homepage'
import Features from './features'
import Footer from './footer'

export default function Website() {
  return (
    <>
      <div className="flex flex-col py-20 md:py-32">
        <Homepage></Homepage>
        <Features></Features>
        <Footer></Footer>
      </div>
    </>
  )
}
