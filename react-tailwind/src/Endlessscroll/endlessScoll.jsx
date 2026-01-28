import  ScrollRow  from "./ScrollRow";

export default function EndlessSection() {
  return (
    <div className="relative space-y-6">

      {/* ROW 1 */}
      <ScrollRow speed={20} />

      {/* ROW 2 – NGƯỢC CHIỀU */}
      <ScrollRow reverse speed={12} />

      {/* ROW 3 */}
      <ScrollRow speed={20} />

      {/* FADE 2 BÊN */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-black to-transparent" />

    </div>
  );
}
