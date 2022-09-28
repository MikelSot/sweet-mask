import { useUser } from '@hooks/useUser'
import HomeClientView from '@modules/Home/HomeClientView'
import HomeUserView from '@modules/Home/HomeUserView'
import type { NextPage } from 'next'
import Head from 'next/head'

const HomePage: NextPage = () => {
  const { isUserLogin } = useUser()

  return (
    <>
      <Head>
        <title>AUTOPRO</title>
      </Head>
      {!isUserLogin ? <HomeClientView /> : <HomeUserView />}
    </>
  )
}

export default HomePage
