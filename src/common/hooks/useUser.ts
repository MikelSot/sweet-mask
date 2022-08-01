import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export const useUser = () => {
  const [isUserLogin, setIsUserLogin] = useState<any>()

  const router = useRouter()

  useEffect(() => {
    setIsUserLogin(
      window.sessionStorage.getItem('isUserLogin')
        ? window.sessionStorage.getItem('isUserLogin')
        : null
    )
  })

  const onChangleLogin = (uri: string) => {
    window.sessionStorage.setItem('isUserLogin', uri)
    setIsUserLogin(window.sessionStorage.getItem('isUserLogin'))
  }

  const onChangleLogout = () => {
    window.sessionStorage.removeItem('isUserLogin')
    setIsUserLogin(null)
    router.push('/')
  }

  return { isUserLogin, onChangleLogin, onChangleLogout }
}
