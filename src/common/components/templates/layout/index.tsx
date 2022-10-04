import Footer from '@components/molecules/footer/Footer'
// import Header from '@components/molecules/header/Header'
import HeaderUser from '@components/molecules/header/HeaderUser'
import SidebarUser from '@components/molecules/sidebar/SidebarUser'
import { useUser } from '@hooks/useUser'
import Head from 'next/head'

import Header from './components/Header'

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export const Layout = (props: LayoutProps) => {
  const { isUserLogin } = useUser()

  return (
    <>
      <Head>
        <title>AUTOPRO</title>
      </Head>
      {!isUserLogin ? (
        <>
          <div className="flex flex-col min-h-screen">
            <div className="h-max">
              <Header />
            </div>
            <main className="grow">{props.children}</main>
            <div className="h-max">
              <Footer />
            </div>
          </div>
        </>
      ) : (
        <>
          <section className="grid grid-cols-10">
            <SidebarUser className="h-screen bg-primary-800 text-gray-100 col-span-2 sticky top-0" />
            <section className="bg-gray-100 col-span-8">
              <HeaderUser />
              <main className="p-8 text-primary-700 bg-gray-100">{props.children}</main>
            </section>
          </section>
        </>
      )}
    </>
  )
}
