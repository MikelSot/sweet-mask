import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ITEM_COMPANY = {
  id: 1,
  name: 'AUTOPRO',
  link: '/'
}

const ITEMS_NAVLINK = [
  {
    id: 1,
    name: 'Inicio',
    link: '/'
  },
  {
    id: 2,
    name: 'Servicios',
    link: '/servicios'
  },
  {
    id: 3,
    name: 'Productos',
    link: '/productos'
  },
  {
    id: 4,
    name: 'Reserva de cita',
    link: '/cita'
  },
  {
    id: 5,
    name: 'Sobre nosotros',
    link: '/nosotros'
  }
]

function NavLink({ to, children, styles }: any) {
  const { pathname } = useRouter()

  return (
    <li>
      <Link href={to}>
        <a
          className={`${styles} ${
            pathname === to ? 'border-b-2 font-bold border-primary-700' : ''
          }`}
        >
          {children}
        </a>
      </Link>
    </li>
  )
}

const MobileNav = ({ open, setOpen }: any) => {
  return (
    <header
      className={`bg-gray-100 pt-0 w-full h-screen fixed top-0 left-0 right-0 text-primary-700 transform transition-transform duration-300 ease-in-out filter drop-shadow-md lg:hidden ${
        open ? '-translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="responsive-screen-width flex items-center justify-between filter drop-shadow-md bg-white h-20">
        <Link key={`${ITEM_COMPANY.id}`} href={`${ITEM_COMPANY.link}`}>
          <a
            className="text-2xl font-bold"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open)
              }, 100)
            }
          >{`${ITEM_COMPANY.name}`}</a>
        </Link>
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center cursor-pointer lg:hidden"
          onClick={() => {
            setOpen(!open)
          }}
        >
          <span
            className={`h-1 w-full bg-primary-700 rounded-lg transform transition duration-300 ease-in-out rotate-45 translate-y-3.5 `}
          />
          <span
            className={`h-1 w-0 bg-primary-700 rounded-lg transition-all duration-300 ease-in-out  `}
          />
          <span
            className={`h-1 w-full bg-primary-700 rounded-lg transform transition duration-300 ease-in-out -rotate-45 -translate-y-3.5 `}
          />
        </div>
      </div>

      <nav>
        <ul className="responsive-screen-width py-16 grid gap-12 text-center">
          {ITEMS_NAVLINK.map(item => {
            const { id, name, link } = item
            return (
              <NavLink key={id} to={link} styles="text-xl">
                {name}
              </NavLink>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

type Props = {}

const Header = (props: Props) => {
  const [open, setOpen] = useState(false)
  const [colorChange, setColorChange] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      // 80
      setColorChange(true)
    } else {
      setColorChange(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)
    return () => window.removeEventListener('scroll', changeNavbarColor)
  })

  return (
    <>
      <header className="w-full h-28 responsive-screen-width fixed top-0 left-0 right-0 text-gray-100 grid">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-0 lg:gap-16">
            <div className="flex items-center" onClick={scrollToTop}>
              <Link key={`${ITEM_COMPANY.id}`} href={`${ITEM_COMPANY.link}`}>
                <a className="text-2xl font-bold">{`${ITEM_COMPANY.name}`}</a>
              </Link>
            </div>
            <nav>
              <ul className="hidden lg:flex lg:items-center gap-8">
                {ITEMS_NAVLINK.map(item => {
                  const { id, name, link } = item
                  return (
                    <NavLink key={id} to={link}>
                      {name}
                    </NavLink>
                  )
                })}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4 lg:none">
            <div className="flex gap-4">
              <button
                type="button"
                className={`text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-4 py-1.5 md:px-8 md:py-2.5 text-center
              `}
              >
                Iniciar sesión
              </button>
              <button
                type="button"
                className={`text-primary-700 bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-1.5 md:px-8 md:py-2.5 text-center
              `}
              >
                Registrarse
              </button>
            </div>
            <div
              className="flex relative w-8 h-8 flex-col justify-between items-center cursor-pointer lg:hidden"
              onClick={() => {
                setOpen(!open)
              }}
            >
              {/* hamburger button */}
              <span
                className={`h-1 w-full bg-gray-100 rounded-lg transform transition duration-300 ease-in-out`}
              />
              <span
                className={`h-1 w-full bg-gray-100 rounded-lg transition-all duration-300 ease-in-out`}
              />
              <span
                className={`h-1 w-full bg-gray-100 rounded-lg transform transition duration-300 ease-in-out`}
              />
            </div>
          </div>
        </div>
        <div className="flex-grow border-t border-primary-600"></div>
      </header>
      <MobileNav open={open} setOpen={setOpen} />
    </>
  )
}

export default Header
