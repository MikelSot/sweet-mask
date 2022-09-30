import { useToggleMenu } from '@hooks/useToggleMenu'
import Link from 'next/link'

const NAV_ITEMS = [
  {
    id: 1,
    label: 'Servicios',
    url: 'services'
  },
  {
    id: 2,
    label: 'Productos',
    url: 'products'
  },
  {
    id: 3,
    label: 'Reserva de cita',
    url: 'appointment'
  },
  {
    id: 4,
    label: 'Nosotros',
    url: 'about'
  }
]

type NavLink = {
  label: string
  url: string
  isTitle?: boolean
}

const NavLink = ({ label, url, isTitle = false }: NavLink) => {
  return (
    <Link href={`${url}`}>
      {isTitle ? <h1 className="cursor-pointer">{label}</h1> : <li>{label}</li>}
    </Link>
  )
}

const Nav = () => {
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

const ICONS = {
  search: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  ),
  cart: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6" viewBox="0 0 16 16">
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  ),
  close: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
    </svg>
  )
}

const BUTTONS_HEADER = [
  {
    id: 1,
    label: 'Registrarse',
    type: 'secondary'
  },
  {
    id: 2,
    label: 'Iniciar sesión',
    type: 'primary'
  }
]

const OptionsHeader = () => {
  const { handleToggleMenu } = useToggleMenu()

  return (
    <div className="h-full flex items-center gap-10">
      <span>{ICONS['search']}</span>
      <span>{ICONS['cart']}</span>
      <span
        className="md:hidden text-red-700 border border-red-500 px-2 py-1 rounded"
        onClick={handleToggleMenu}
      >
        {ICONS['close']}
      </span>
      <div className="h-8 w-[1px] bg-sm_primary-700 hidden lg:grid"></div>
      {BUTTONS_HEADER.map(item => {
        const { id, label, type } = item
        return (
          <button
            key={id}
            type="button"
            className={`rounded-md px-4 py-2 place-items-center transition-colors duration-300 hidden md:grid ${
              type !== 'primary'
                ? 'text-sm_primary-700 border border-sm_primary-700'
                : 'text-sm_grey-600 bg-sm_primary-700'
            }
`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

const Header = () => {
  const { isToggle } = useToggleMenu()

  return (
    <header className="w-full h-20 border-b border-grey-100 sticky top-0 left-0 text-sm_primary-800 bg-white">
      <div className="h-full flex items-center justify-between container-section">
        <div className="flex gap-12 items-center xl:gap-20">
          <NavLink label={'AUTOPRO'} url={`/`} isTitle={true} />

          <div className={`${isToggle ? 'block' : 'hidden'}`}></div>
          <Nav />
        </div>
        <OptionsHeader />
      </div>
    </header>
  )
}

export default Header
