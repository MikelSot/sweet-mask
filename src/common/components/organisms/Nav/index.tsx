import { NavLink } from '@components/atoms/navLink'
import { NAV_ITEMS } from '@constants/nav.constant'

type Props = {
  isMenuToggle: boolean
}

const Nav = (props: Props) => {
  return (
    <nav
      className={`fixed top-16 left-0 w-full h-[calc(100%-4rem)] bg-sm_primary-100 lg:bg-transparent lg:static`}
    >
      <ul className="flex flex-col items-center gap-4 py-8 px-2 lg:flex-row lg:p-0">
        {NAV_ITEMS.map(item => {
          const { id, label, url } = item
          return (
            <div key={id}>
              <NavLink label={label} url={`/${url}`} />
            </div>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
