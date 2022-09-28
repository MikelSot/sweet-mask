import Banner from '@components/templates/banner'
import Section from '@components/templates/section'
import { useServices } from 'mock2/context/service.context'
import Image from 'next/image'
import Link from 'next/link'

import { useProducts } from './../../mock2/context/product.context'

const itemsButtonsBanner: any = [
  {
    id: 1,
    name: 'Ver los servicios',
    typeButton: 'secondary',
    url: '/servicios'
  },
  {
    id: 2,
    name: 'Ver los productos',
    typeButton: 'primary',
    url: '/productos'
  }
]

const itemsReceiveFromCompany: any = [
  {
    id: 1,
    name: 'MECÁNICOS ESPECIALISTAS',
    urlImage: '/imagenes/inicio/recibir-autopro/mecanicos-especialistas.jpg'
  },
  {
    id: 2,
    name: 'ASESORÍA MECÁNICA',
    urlImage: '/imagenes/inicio/recibir-autopro/asesoria-mecanica.jpg'
  },
  {
    id: 3,
    name: 'TALLER EN CASA O EN OFICINA',
    urlImage: '/imagenes/inicio/recibir-autopro/taller-casa-oficina.jpg'
  },
  {
    id: 4,
    name: 'CALIDAD INSUPERABLE',
    urlImage: '/imagenes/inicio/recibir-autopro/calidad-insuperable.webp'
  },
  {
    id: 5,
    name: 'GARANTÍA DEL SERVICIO',
    urlImage: '/imagenes/inicio/recibir-autopro/garantia-servicio.png'
  }
]

const itemsButtonsSlidersProducts: any = [
  {
    id: 1,
    name: 'Conoce todos nuestros productos',
    typeButton: 'primary',
    url: '/productos'
  }
]

const itemsButtonsServicesOffered: any = [
  {
    id: 1,
    name: 'Conoce todos nuestros servicios',
    typeButton: 'primary',
    url: '/servicios'
  }
]

const itemsAbout: any = [{}]

const itemsButtonsAbout: any = [
  {
    id: 1,
    name: 'Ver más',
    typeButton: 'primary',
    url: '/nosotros'
  }
]

const itemsSlidersSuppliers: any = [
  {
    id: 1,
    items: [
      {
        id: 1,
        nameImage: 'Image',
        urlImage: '/imagenes/inicio/nuestros-proveedores/proveedor-velyen.png'
      },
      {
        id: 2,
        nameImage: 'Image',
        urlImage: '/imagenes/inicio/nuestros-proveedores/proveedor-launch.jpg'
      },
      {
        id: 3,
        nameImage: 'Image',
        urlImage: '/imagenes/inicio/nuestros-proveedores/proveedor-scania.jpg'
      },
      {
        id: 4,
        nameImage: 'Image',
        urlImage: '/imagenes/inicio/nuestros-proveedores/proveedor-mishubishi.png'
      },
      {
        id: 5,
        nameImage: 'Image',
        urlImage: '/imagenes/inicio/nuestros-proveedores/proveedor-honda.png'
      }
    ]
  }
]

const HomeClientView = () => {
  const { services }: any = useServices()
  const { products }: any = useProducts()

  const newArrProduct: any = [
    {
      id: 1,
      items: [...products.slice(0, 5)]
    },
    {
      id: 2,
      items: [...products.slice(0).slice(-5)]
    }
  ]

  return (
    <>
      {/* BANNER */}
      <Banner
        isHome={true}
        className={
          'w-full min-h-[35rem] pt-28 pb-20 bg-gradient-to-tr from-primary-600 to-primary-800 grid place-content-center responsive-screen-width'
        }
        title={'MECÁNICA AUTOMOTRIZ'}
        description={
          'Somos AUTOPRO, una mecánica automotriz que brinda productos a precios accesibles y servicios con excelentes profesionales que se encargan de ello.'
        }
        buttons={itemsButtonsBanner}
        nameImage="Imagen banner inicio"
        urlImage="/imagenes/inicio/banner/banner.png"
      />

      {/* RECIBIR AUTOPRO */}
      <Section
        className={
          'grid responsive-screen-gap responsive-screen-width responsive-screen-height bg-white text-primary-700'
        }
        title={'¿QUÉ VAS A RECIBIR DE AUTOPRO?'}
        typeGallery={'galleryReceive'}
        data={itemsReceiveFromCompany.slice(0, 5)}
      />

      {/* TODOS PRODUCTOS */}
      <Section
        className={
          'bg-primary-200 text-primary-700 grid responsive-screen-height responsive-screen-gap'
        }
        title={'TODOS LOS PRODUCTOS QUE NECESITAS'}
        description={'A precios accesibles y de alta calidad'}
        typeGallery={'slider'}
        data={newArrProduct}
        itemButton={itemsButtonsSlidersProducts}
      />

      {/* SERVICIO OFRECE */}
      <Section
        className={
          'grid responsive-screen-gap responsive-screen-width responsive-screen-height bg-white text-primary-700'
        }
        title={'¿QUÉ SERVICIOS OFRECEMOS?'}
        description={'Contamos con excelentes profersionales'}
        typeGallery={'galleryOffered'}
        data={services.slice(0, 6)}
        itemButton={itemsButtonsServicesOffered}
      />

      {/* SOBRE NOSOTROS */}
      <Section
        className={
          'bg-primary-200 grid grid-cols-1 md:grid-cols-2 gap-5 responsive-screen-width responsive-screen-height text-primary-700'
        }
        title={'SOBRE NOSOTROS'}
        description={
          'Somos una empresa peruana dedicada al rubro automotriz. Nuestra misión es ofrecer los mejores productos y servicios a nuestros clientes, procurando tengan la mejor experiencia en todo momento...'
        }
        typeGallery={'gridAbout'}
        data={itemsAbout}
        itemButton={itemsButtonsAbout}
      />

      {/* NUESTROS PROVEEDORES */}
      <Section
        className={'bg-white text-primary-700 grid responsive-screen-height responsive-screen-gap'}
        title={'NUESTROS PROVEEDORES'}
        typeGallery={'slider'}
        data={itemsSlidersSuppliers}
      />

      {/* NUESTROS CLIENTES */}
      <section className="bg-white py-14">
        <section className="py-20 bg-gradient-to-tr from-primary-600 to-primary-800 -skew-y-[4deg] text-gray-100 responsive-screen-width responsive-screen-height">
          <div className="skew-y-[4deg] grid responsive-screen-gap">
            <h2 className="text-xl font-bold text-center text-gray-100">NUESTROS CLIENTES</h2>
            <section className="w-full overflow-hidden blue-300">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  <div className="col-span-12 md:col-span-3 h-52 rounded-2xl border border-gray-300 overflow-hidden">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                      src="/images/home/servicio-1.jpg"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-2 h-52 rounded-2xl border border-gray-300 overflow-hidden">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                      src="/images/home/servicio-2.jpg"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-4 h-52 rounded-2xl border border-gray-300 overflow-hidden">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                      src="/images/home/servicio-3.jpg"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-3 h-52 rounded-2xl border border-gray-300 overflow-hidden">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                      src="/images/home/servicio-4.webp"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-5 h-52 rounded-2xl border border-gray-300 overflow-hidden">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                      src="/images/home/servicio-5.jpg"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-3 h-52 rounded-2xl border border-gray-300 overflow-hidden">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                      src="/images/home/servicio-6.jpg"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-4 h-52 rounded-2xl border border-gray-300 overflow-hidden">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                      src="/images/home/servicio-6.jpg"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </section>
      {/* RESERVAR CITA */}
      <section className="py-40 grid responsive-screen-gap responsive-screen-width responsive-screen-height bg-white text-primary-700">
        <div className="w-full m-auto grid gap-2">
          <h2 className="text-xl font-bold text-center">¿QUIERES RESERVAR UNA CITA?</h2>
          <p className="text-center">
            Puedes reservar una cita para tu atención y así ahorres tiempo
          </p>
        </div>
        <Link href="/cita">
          <a
            className={`w-max m-auto text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-8 py-2 text-center
            `}
          >
            Reservar cita
          </a>
        </Link>
      </section>
      {/* UBICACION */}
      <section className="bg-primary-200 text-primary-700 grid responsive-screen-gap responsive-screen-width responsive-screen-height">
        <h2 className="text-xl font-bold text-center">NUESTRA UBICACIÓN</h2>
        <div className="w-full h-60 md:h-96 relative rounded-2xl overflow-hidden">
          <Image
            src={'/imagenes/inicio/nuestra-ubicacion/google-mapa.jpg'}
            alt="imagen logo"
            layout="fill"
            objectFit="cover" //cover
          />
        </div>
      </section>
    </>
  )
}

export default HomeClientView
