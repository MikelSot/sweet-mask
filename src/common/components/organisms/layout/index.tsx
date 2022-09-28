import Footer from '@components/molecules/footer/Footer'
import Header from '@components/molecules/header/Header'
import HeaderUser from '@components/molecules/header/HeaderUser'
import SidebarUser from '@components/molecules/sidebar/SidebarUser'
import { useUser } from '@hooks/useUser'
import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode
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
          <Header />
          <main>{props.children}</main>
          <Footer />
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
