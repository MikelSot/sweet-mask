import Banner from '@components/templates/banner'
import GridList from '@components/templates/gridList'
import Section from '@components/templates/section'

import { useProducts } from './../../mock2/context/product.context'

const ProductView = () => {
  const { products }: any = useProducts()

  const newArrProduct: any = [
    {
      id: 1,
      items: [...products.slice(0, 5)]
    },
    {
      id: 2,
      items: [...products.slice(3, 8)]
    }
  ]

  return (
    <>
      {/* BANNER */}
      <Banner
        isHome={false}
        className={
          'w-full h-80 md:min-h-[27rem] pt-28 pb-10 md:pb-16 bg-gradient-to-tr from-primary-600 to-primary-800 grid place-items-center responsive-screen-width'
        }
        title="NUESTROS PRODUCTOS"
      />

      {/* SERVICIOS OFERTA */}
      <Section
        className={'bg-white text-primary-700 grid responsive-screen-height responsive-screen-gap'}
        title={'TODOS LOS PRODUCTOS QUE NECESITAS'}
        description={'A precios accesibles y de alta calidad'}
        typeGallery={'slider'}
        data={newArrProduct}
      />

      {/* LISTA NUESTROS SERVICIOS */}
      <GridList title={'LISTA DE NUESTROS PRODUCTOS'} data={products} />
    </>
  )
}

export default ProductView
