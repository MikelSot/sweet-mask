import ServiceView from '@modules/Services/ServiceView'
import type { NextPage } from 'next'
import Head from 'next/head'

const ServicePage = () => {
  return (
    <>
      <Head>
        <title>AUTOPRO - SERVICIOS</title>
      </Head>
      <ServiceView />
    </>
  )
}

export default ServicePage
