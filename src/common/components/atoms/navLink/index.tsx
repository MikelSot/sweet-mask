import Link from 'next/link'

type NavLink = {
  label: string
  url: string
  isTitle?: boolean
}

export const NavLink = ({ label, url, isTitle = false }: NavLink) => {
  return (
    <Link href={`${url}`}>
      {isTitle ? <h1 className="cursor-pointer">{label}</h1> : <li>{label}</li>}
    </Link>
  )
}
