import { useState } from 'react'

export const useToggleMenu = () => {
  const [isToggleMenu, setIsToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setIsToggleMenu(!isToggleMenu)
  }

  return { isToggleMenu, handleToggleMenu }
}
