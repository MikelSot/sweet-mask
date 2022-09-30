import 'react-day-picker/lib/style.css'
import '../../styles/styles.scss'

import Spinner from '@components/atoms/spinner'
import { Layout } from '@components/templates/layout'
import { AppointmentProvider } from 'mock2/context/appointment.context'
import { GraphicsAreaProvider } from 'mock2/context/graphicsArea.context'
import { GraphicsColumnProvider } from 'mock2/context/graphicsColumn.context'
import { ProductProvider } from 'mock2/context/product.context'
import { ServiceProvider } from 'mock2/context/service.context'
import { UserProvider } from 'mock2/context/user.context'
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
    <UserProvider>
      <AppointmentProvider>
        <ServiceProvider>
          <ProductProvider>
            <GraphicsAreaProvider>
              <GraphicsColumnProvider>
                <Layout>{loading ? <Spinner /> : <Component {...pageProps} />}</Layout>
              </GraphicsColumnProvider>
            </GraphicsAreaProvider>
          </ProductProvider>
        </ServiceProvider>
      </AppointmentProvider>
    </UserProvider>
  )
}

export default MyApp
