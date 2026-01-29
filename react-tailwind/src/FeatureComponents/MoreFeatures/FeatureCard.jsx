export default function FeatureCard({ title, description }) {
  return (
    <div>
      <div className="flex flex-col w-81.5 gap-4">
        <span className="text-[20px] font-semibold font-manrope leading-8 text-white tracking-tight ">
          {title}
        </span>
        <span className="text-[16px] font-manrope leading-7 text-[#828282] tracking-tight h-28.75">
          {description}
        </span>
      </div>
    </div>
  )
}
