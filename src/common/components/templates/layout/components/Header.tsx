import { NavLink } from '@components/atoms/navLink'
import Nav from '@components/organisms/Nav'
import { ICONS } from '@components/svg/icons'
import { useToggleMenu } from '@hooks/useToggleMenu'
import Link from 'next/link'
import { useState } from 'react'

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

const OptionsHeader = ({ handleToggleMenu }: any) => {
  return (
    <div className="h-full flex items-center gap-10">
      <span className="w-6">{ICONS['search']}</span>
      <span className="w-6">{ICONS['cart']}</span>
      <span
        className="w-6 md:hidden text-red-700 border border-red-500 px-2 py-1 rounded"
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
            className={`button button-hidden ${
              type !== 'primary' ? 'button-primary' : 'button-secondary'
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
  const [isMenuToggle, setIsToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setIsToggleMenu(isMenuToggle)
  }
  return (
    <header className="w-full h-20 border-b border-grey-100 sticky top-0 left-0 text-sm_primary-800 bg-white">
      <div className="h-full flex items-center justify-between container-section">
        <div className="flex gap-12 items-center xl:gap-20">
          <NavLink label={'AUTOPRO'} url={'/'} isTitle={true} />
          <Nav isMenuToggle={isMenuToggle} />
        </div>
        <OptionsHeader handleToggleMenu={handleToggleMenu} />
      </div>
    </header>
  )
}

export default Header
