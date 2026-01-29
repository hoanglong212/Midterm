export default function FooterSocial() {
  const socialIcons = ['f', 'G+', 'IG', 'YT']

  return (
    <>
      <p className="text-sm text-white/40 mt-8 mb-4">Follow us</p>
      <div className="flex gap-4">
        {socialIcons.map((icon) => (
          <div
            key={icon}
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:border-white hover:text-white cursor-pointer transition"
          >
            {icon}
          </div>
        ))}
      </div>
    </>
  )
}
