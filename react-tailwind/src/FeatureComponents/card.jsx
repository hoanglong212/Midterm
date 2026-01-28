export default function Card({ context }) {
  return (
    <button className="group relative inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-6  text-white h-[53px]">
      <span className="">
        <span className="">{context}</span>
      </span>
    </button>
  )
}
