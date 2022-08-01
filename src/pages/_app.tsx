import '../../styles/styles.scss'

import Spinner from '@components/atoms/spinner'
import { Layout } from '@components/organisms/layout'
import { ProductProvider } from 'mock2/context/product.context'
import { ServiceProvider } from 'mock2/context/service.context'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, SetLoading] = useState(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      SetLoading(true)
    })

    Router.events.on('routeChangeComplete', () => {
      SetLoading(false)
    })

    Router.events.on('routeChangeError', () => {
      SetLoading(false)
    })
  }, [])

  return (
    <ServiceProvider>
      <ProductProvider>
        <Layout>
          {/* <Component {...pageProps} /> */}
          {loading ? <Spinner /> : <Component {...pageProps} />}
        </Layout>
      </ProductProvider>
    </ServiceProvider>
  )
}

export default MyApp
