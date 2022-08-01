import Banner from '@components/templates/banner'
import GridList from '@components/templates/gridList'
import Section from '@components/templates/section'
import { useServices } from 'mock2/context/service.context'

const ServiceView = () => {
  const { services }: any = useServices()

  return (
    <>
      {/* BANNER */}
      <Banner
        isHome={false}
        className={
          'w-full h-80 md:min-h-[27rem] pt-28 pb-10 md:pb-16 bg-gradient-to-tr from-primary-600 to-primary-800 grid place-items-center responsive-screen-width'
        }
        title="NUESTROS SERVICIOS"
      />

      <Section
        className={
          'text-primary-700 grid responsive-screen-height responsive-screen-gap bg-gray-100'
        }
        title={'SERVICIOS EN OFERTA'}
        typeGallery={'slider'}
        data={services.slice(0, 6)}
      />
      <section className="grid responsive-screen-height responsive-screen-gap bg-gray-100">
        <h2 className="text-xl font-bold text-center">SERVICIOS EN OFERTA</h2>
        <section className="w-full h-52 bg-blue-300">Slider 2</section>
      </section>
      {/* LISTA NUESTROS SERVICIOS */}
      <GridList title={'LISTA DE NUESTROS SERVICIOS'} data={services} />
    </>
  )
}

export default ServiceView
