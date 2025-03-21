import Link from 'next/link'

const navbarItems = [
  {
    id: 1,
    title: 'Home',
    href: '/',
  },
  {
    id: 2,
    title: 'Nested Layout with Blogs',
    href: '/blogs',
  },
  {
    id: 3,
    title: 'Streaming SR',
    href: '/streaming-sr',
  },
  {
    id: 4,
    title: 'Auth with CRUD',
    href: '/auth',
  },
]

const Navbar = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="space-x-4">
        {navbarItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
