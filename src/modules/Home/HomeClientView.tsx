import Carousel from '@components/organisms/Carousel'
import { ICONS } from '@components/svg/icons'
import Banner from '@components/templates/banner'
import { OUR_PRODUCTS } from '@data/our-products.data'
import { OUR_SERVICES } from '@data/our-services.data'
import { useServices } from 'mock2/context/service.context'
import Image from 'next/image'
import Link from 'next/link'

import { useProducts } from './../../mock2/context/product.context'

const itemsButtonsBanner: any = [
  {
    id: 1,
    name: 'Ver productos',
    typeButton: 'secondary',
    url: '/products'
  },
  {
    id: 2,
    name: 'Ver servicios',
    typeButton: 'primary',
    url: '/services'
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
    <div className="w-full">
      {/* BANNER */}
      <Banner
        isHome={true}
        className={
          'w-full py-40 grid place-content-center container-section border-b border-sm_grey-100'
        }
        title={'MECÁNICA AUTOMOTRIZ'}
        description={
          'Somos AUTOPRO, una mecánica automotriz que brinda productos a precios accesibles y servicios con excelentes profesionales que se encargan de ello.'
        }
        buttons={itemsButtonsBanner}
        nameImage="Imagen banner inicio"
        urlImage="/imagenes/inicio/banner/banner.png"
      />

      {/* NUESTROS SERVICIOS */}
      <section className="padding-vertical-section">
        <div className="container-section">
          <h2 className="text-xl font-bold text-center">NUESTROS SERVICIOS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {OUR_SERVICES.map(service => {
              const { id, name, description, icon } = service
              return (
                <article key={id} className="card">
                  <div className="w-12 m-auto">{icon}</div>
                  <p className="title">{name}</p>
                  <p className="description">{description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* NUESTROS PRODUCTOS */}

      <section className="padding-vertical-section">
        <div className="container-section">
          <h2 className="text-xl font-bold text-center">NUESTROS PRODUCTOS</h2>
          <Carousel OUR_PRODUCTS={OUR_PRODUCTS} icon={ICONS['cart']} />
        </div>
      </section>

      {/* RESERVAR CITA */}
      <section className="container-section">
        <div className="bg-gray-200 text-primary-700 py-32 lg:py-40 rounded-lg text-center flex flex-col gap-8 lg:gap-12 px-2 lg:px-8">
          <h2 className="mb-0 font-bold lg:text-3xl">¿QUIERES RESERVAR UNA CITA?</h2>
          <p className="lg:text-lg">
            Puedes recibir el servicio que necesites, en el lugar en el que te encuentres
          </p>
          <Link href="/cita">
            <span className="button button-secondary w-max m-auto">Reservar cita </span>
          </Link>
        </div>
      </section>

      {/* UBICACION */}
      <section className="text-primary-700 grid container-section padding-vertical-section">
        <h2 className="text-xl font-bold text-center">NUESTRA UBICACIÓN</h2>
        <div className="w-full h-60 md:h-96 relative rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.851412079641!2d-76.632333!3d-12.6577457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910565505464808d%3A0x1616afb9406b3a35!2sPlaza%20de%20Armas%20de%20Mala!5e0!3m2!1ses!2spe!4v1664847330844!5m2!1ses!2spe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default HomeClientView
