import AboutView from '@modules/About/AboutView'
import Head from 'next/head'
import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <>
      <Head>
        <title>AUTOPRO - NOSOTROS</title>
      </Head>
      <AboutView />
    </>
  )
}

export default index
