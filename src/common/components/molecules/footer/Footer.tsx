import Link from 'next/link'

const ITEM_EMPRESA = {
  id: 1,
  nombre: 'AUTOPRO',
  pais: 'Perú',
  departamento: 'Lima',
  footer_icon: '🌍'
}

const FOOTER_CONTACTANOS = {
  title: 'Contáctanos',
  footer_icon: '✉️',
  items: [
    {
      id: 1,
      nombre: 'Soporte al cliente',
      link: '#!'
    },
    {
      id: 2,
      nombre: 'Política de privacidad',
      link: '#!'
    },
    {
      id: 3,
      nombre: 'Términos y condiciones',
      link: '#!'
    }
  ]
}

const FOOTER_NOSOTROS = {
  title: 'Acerca de nosotros',
  footer_icon: '🌍',
  items: [
    {
      id: 1,
      nombre: '¿Qué es AUTOPRO?',
      link: '/nosotros'
    },
    {
      id: 2,
      nombre: 'Nuestro equipo',
      link: '/nosotros'
    },
    {
      id: 3,
      nombre: 'Visión y misión',
      link: '/nosotros'
    }
  ]
}

const FOOTER_ENLACES = {
  title: 'Enlaces',
  footer_icon: '✉️',
  items: [
    {
      id: 1,
      nombre: 'Inicio',
      link: ''
    },
    {
      id: 2,
      nombre: 'Servicios',
      link: '/servicios'
    },
    {
      id: 3,
      nombre: 'Productos',
      link: '/productos'
    },
    {
      id: 4,
      nombre: 'Reserva de cita',
      link: '/cita'
    }
  ]
}

const ITEMS_ICONOS = [
  {
    id: 1,
    nombre: 'Linkedin',
    image: ''
  },
  {
    id: 2,
    nombre: 'Email',
    image: ''
  },
  {
    id: 3,
    nombre: 'Instagram',
    image: ''
  },
  {
    id: 4,
    nombre: 'Twitter',
    image: ''
  }
]

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className=" bg-primary-800 text-gray-600 responsive-screen-width responsive-screen-height">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="h-full flex flex-col">
          <h6 className="text-center md:text-left uppercase font-semibold mb-4 text-gray-100 md:justify-start">
            {`${ITEM_EMPRESA.nombre}`}
          </h6>
          <div className="m-auto md:m-0 h-full flex flex-col justify-between gap-4 md:gap-0">
            <div className="flex m-auto gap-1 my-2 md:m-0">
              <div>{ITEM_EMPRESA.footer_icon}</div>
              <hr className="w-px h-full bg-gray-600" />
              <p>{`${ITEM_EMPRESA.departamento} - ${ITEM_EMPRESA.pais}`}</p>
            </div>
            <div className="flex gap-5 m-auto md:m-0">
              <a href="#!" className="text-gray-600">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="linkedin-in"
                  className="w-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </a>
              <a href="#!" className="text-gray-600">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="envelope"
                  className="w-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
              </a>
              <a href="#!" className="text-gray-600">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="w-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
              <a href="#!" className="text-gray-600">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  className="w-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="h-full">
          <h6 className="text-center md:text-left font-semibold mb-4 text-gray-100 md:justify-start">
            {FOOTER_CONTACTANOS.title}
          </h6>
          <div className="m-auto h-full flex flex-col justify-start">
            <div className="flex m-auto gap-1 my-2 md:m-0">
              <div>{FOOTER_CONTACTANOS.footer_icon}</div>
              <hr className="w-px h-full bg-gray-600" />
              <div className="grid gap-2">
                {FOOTER_CONTACTANOS.items.map(item => {
                  const { id, nombre, link } = item
                  return (
                    <p key={id} className="">
                      <Link href={link}>
                        <a className="text-gray-600">{nombre}</a>
                      </Link>
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h6 className="text-center md:text-left font-semibold mb-4 text-gray-100 md:justify-start">
            {FOOTER_NOSOTROS.title}
          </h6>
          <div className="m-auto h-full flex flex-col justify-start">
            <div className="flex m-auto gap-1 my-2 md:m-0">
              <div>{FOOTER_NOSOTROS.footer_icon}</div>
              <hr className="w-px h-full bg-gray-600" />
              <div className="grid gap-2">
                {FOOTER_NOSOTROS.items.map(item => {
                  const { id, nombre, link } = item
                  return (
                    <p key={id} className="">
                      <Link href={link}>
                        <a className="text-gray-600">{nombre}</a>
                      </Link>
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h6 className="text-center md:text-left font-semibold mb-4 text-gray-100 md:justify-start">
            {FOOTER_ENLACES.title}
          </h6>

          <div className="m-auto h-full flex flex-col justify-start">
            <div className="flex m-auto gap-1 my-2 md:m-0">
              <div>{FOOTER_ENLACES.footer_icon}</div>
              <hr className="w-px h-full bg-gray-600" />
              <div className="grid gap-2">
                {FOOTER_ENLACES.items.map(item => {
                  const { id, nombre, link } = item
                  return (
                    <p key={id} className="">
                      <Link href={link}>
                        <a className="text-gray-600">{nombre}</a>
                      </Link>
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
