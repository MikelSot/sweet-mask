import { useState } from 'react'

export const useToggleModal = () => {
  const [isModalToggle, ModalMenuToggle] = useState(false)

  const handleModalToggle = () => {
    ModalMenuToggle(!isModalToggle)
  }

  return { isModalToggle, handleModalToggle }
}
