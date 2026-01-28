import wand from '../assets/mdi_wand.png'

export default function GenBTN({ context }) {
  return (
    <button className="group relative inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-6 py-4 text-whiteover flow-hidden">
      <span className="relative h-5 overflow-hidden">
        <span className="absolute left-0 top-[-130%] transition-transform duration-300 ease-out group-hover:translate-y-full">
          {context}
        </span>

        <span className="block transition-transform duration-300 ease-out group-hover:translate-y-full">
          {context}
        </span>
      </span>
      <img src={wand} alt="wand" className="w-4 h-4" />
    </button>
  )
}
