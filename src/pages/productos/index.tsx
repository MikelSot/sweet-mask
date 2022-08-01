import ProductView from '@modules/Products/ProductView'
import Head from 'next/head'

const ProductPage = () => {
  return (
    <>
      <Head>
        <title>AUTOPRO - PAGINA PRODUCTOS</title>
      </Head>

      <ProductView />
    </>
  )
}

export default ProductPage
