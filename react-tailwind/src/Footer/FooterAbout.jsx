export default function FooterAbout() {
  const aboutItems = ['Gallery', 'News', 'Contacts']

  return (
    <div>
      <p className="text-sm text-white/40 mb-6">About school</p>
      <ul className="space-y-3 text-white/80">
        {aboutItems.map((item) => (
          <li key={item} className="hover:text-white cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
