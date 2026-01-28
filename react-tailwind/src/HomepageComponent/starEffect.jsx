import star from '../assets/star.png'
import starbig from '../assets/star-big.png'

export default function StarEffect() {
  return (
    <>
      <img
        src={starbig}
        alt=""
        className="absolute top-60 left-110 animate-pulse opacity-90 delay-0 [animation-duration:1.4s]"
      />
      <img
        src={starbig}
        alt=""
        className="absolute -bottom-30 left-120 animate-pulse opacity-90 delay-200 [animation-duration:1.4s]"
      />
      <img
        src={star}
        alt=""
        className="absolute top-40 right-100 animate-pulse opacity-90 delay-350 [animation-duration:1.4s]"
      />
      <img
        src={star}
        alt=""
        className="absolute bottom-80 left-50 animate-pulse opacity-90 delay-500 [animation-duration:1.4s]"
      />
      <img
        src={star}
        alt=""
        className="absolute bottom-40 right-40 animate-pulse opacity-90 delay-650 [animation-duration:1.4s]"
      />
      <img
        src={starbig}
        alt=""
        className="absolute top-90 right-5 animate-pulse opacity-90 delay-800 [animation-duration:1.4s]"
      />
      <img
        src={star}
        alt=""
        className="absolute -bottom-40 right-60 animate-pulse opacity-90 delay-650 [animation-duration:1.4s]"
      />
    </>
  )
}
