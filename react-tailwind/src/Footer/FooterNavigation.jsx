export default function FooterNavigation() {
  const navItems = ['Schedule', 'Courses', 'Pricing', 'Payment', 'Study In Spain', 'Books']

  return (
    <div>
      <p className="text-sm text-white/40 mb-6">Navigation</p>
      <ul className="space-y-3 text-white/80">
        {navItems.map((item) => (
          <li key={item} className="hover:text-white cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
