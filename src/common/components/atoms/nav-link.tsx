import Link from 'next/link'

export function NavLink({ to, pathname, children, styles, onClick }: any) {
  return (
    <li>
      <Link href={to}>
        <a
          className={`${styles} ${pathname === to ? 'border-b-2 font-bold border-gray-100' : ''}`}
          onClick={onClick}
        >
          {children}
        </a>
      </Link>
    </li>
  )
}
