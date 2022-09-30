import { useState } from 'react'

export const useToggleMenu = () => {
  const [isToggle, setIsToggle] = useState(false)

  const handleToggleMenu = () => setIsToggle(!isToggle)

  return { isToggle, handleToggleMenu }
}
