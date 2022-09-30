import { useRouter } from 'next/router'

const itemsNuestroEquipo = [
  {
    id: 1,
    image: '/imagenes/nosotros/nosotros-mecanico.png',
    name: 'José Fernandez',
    cargo: 'Director General',
    description:
      'Somos una empresa peruana dedicada al rubro automotriz, que brinda servicios como ensamblaje.',
    social_media: [
      {
        id: 10,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 11,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 12,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 13,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      }
    ]
  },
  {
    id: 2,
    image: '/imagenes/nosotros/nosotros-mecanico.png',
    name: 'José Fernandez',
    cargo: 'Recursos Humanos',
    description:
      'Somos una empresa peruana dedicada al rubro automotriz, que brinda servicios como ensamblaje.',
    social_media: [
      {
        id: 20,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 21,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 22,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 23,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      }
    ]
  },
  {
    id: 3,
    image: '/imagenes/nosotros/nosotros-mecanico.png',
    name: 'José Fernandez',
    cargo: 'Recursos Humanos',
    description:
      'Somos una empresa peruana dedicada al rubro automotriz, que brinda servicios como ensamblaje.',
    social_media: [
      {
        id: 30,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 31,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 32,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 33,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      }
    ]
  },
  {
    id: 4,
    image: '/imagenes/nosotros/nosotros-mecanico.png',
    name: 'José Fernandez',
    cargo: 'Recursos Humanos',
    description:
      'Somos una empresa peruana dedicada al rubro automotriz, que brinda servicios como ensamblaje.',
    social_media: [
      {
        id: 40,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 41,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 42,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 43,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      }
    ]
  },
  {
    id: 5,
    image: '/imagenes/nosotros/nosotros-mecanico.png',
    name: 'José Fernandez',
    cargo: 'Recursos Humanos',
    description:
      'Somos una empresa peruana dedicada al rubro automotriz, que brinda servicios como ensamblaje.',
    social_media: [
      {
        id: 50,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 51,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 52,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 53,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      }
    ]
  },
  {
    id: 6,
    image: '/imagenes/nosotros/nosotros-mecanico.png',
    name: 'José Fernandez',
    cargo: 'Recursos Humanos',
    description:
      'Somos una empresa peruana dedicada al rubro automotriz, que brinda servicios como ensamblaje.',
    social_media: [
      {
        id: 60,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 61,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 62,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 63,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      }
    ]
  }
]

type Props = {}

const workshopName = (props: any) => {
  const router = useRouter()
  return (
    <>
      {/* BANNER */}
      <section className="w-full h-80 md:min-h-[27rem] pt-28 pb-10 md:pb-16 bg-gradient-to-tr from-primary-600 to-primary-800 grid place-items-center responsive-screen-width">
        <div className="grid gap-6">
          <h1 className="text-gray-100 text-center text-xl md:text-3xl md:text-start lg:text-4xl font-bold">
            {`TALLER - ${props.name.toUpperCase()}`}
          </h1>
          <div className="w-3/6 m-auto flex-grow border-t-2 border-gray-100"></div>
        </div>
      </section>
      {/* INFORMACION UBICACION */}
      <section className="grid gap-10 responsive-screen-width responsive-screen-height">
        <button
          type="button"
          className="bg-red-700/60 w-max px-8 py-2 text-center rounded-lg text-gray-100"
          onClick={() => router.back()}
        >
          Volver
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          <div className="bg-primary-300 col-span-3 rounded-xl overflow-hidden">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full"
              src="/imagenes/inicio/nuestra-ubicacion/google-mapa.jpg"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-8">
            <div className="grid gap-3">
              <p className="font-bold">DIRECCIÓN:</p>
              <span>Jr. Benavides 23 Mz. A Lt. B</span>
            </div>
            <div className="grid gap-3">
              <p className="font-bold">HORARIO DE ATENCIÓN:</p>
              <span>Lunes a Viernes de 7 a.m. a 7 p.m.</span>
              <span>Sábado de 7 a.m. a 3 p.m.</span>
            </div>
            <div className="grid gap-3">
              <p className="font-bold">CONTÁCTANOS :</p>
              <div className="flex items-center gap-7 m-auto md:m-0">
                <a href="#!">
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
                <a href="#!">
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
                <a href="#!">
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
                <a href="#!">
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
        </div>
      </section>
      {/* HISTORIA */}
      <section className="grid responsive-screen-width responsive-screen-height responsive-screen-gap">
        <h2 className="text-xl font-bold text-center">HISTORIA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <p className="flex flex-col gap-4 justify-center">
            {` Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo.`}
          </p>
          <div className="w-full h-auto rounded-2xl border border-gray-300 overflow-hidden">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full"
              src="/images/home/sobre_nosotros.jpg"
            />
          </div>
        </div>
      </section>
      {/* NUESTRO TRABAJO */}
      <section className="my-14 py-20 bg-gradient-to-tr from-primary-600 to-primary-800 -skew-y-[4deg] text-gray-100 responsive-screen-width responsive-screen-height">
        <div className="skew-y-[4deg] grid responsive-screen-gap">
          <h2 className="text-xl font-bold text-center text-gray-100">NUESTRO TRABAJO</h2>
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
      {/* NUESTRO EQUIPO */}
      <section className="grid responsive-screen-gap responsive-screen-width responsive-screen-height">
        <div className="grid gap-2">
          <h2 className="text-xl font-bold text-center">CONOCE A NUESTRO EQUIPO</h2>
          <p className="text-center">Profesionales a cargo de los servicios</p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {itemsNuestroEquipo.map(item => {
            const { id, name, image, cargo, description, social_media } = item
            return (
              <div
                key={id}
                className="bg-primary-200 grid gap-8 p-6 rounded-xl border border-primary-400 md:p-8"
              >
                <div className="grid gap-5 grid-cols-6">
                  <div className="col-span-2 rounded-full overflow-hidden border border-primary-400">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full"
                      src="/imagenes/nosotros/nosotros-mecanico.png"
                    />
                  </div>
                  <div className="col-span-4">
                    <div className="grid gap-2">
                      <p className="text-lg font-bold">{name}</p>
                      <p className="text-red-500">{cargo}</p>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-7 m-auto md:m-0">
                  <a href="#!" className="text-gray-600">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="linkedin-in"
                      className="w-6"
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
                      className="w-6"
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
                      className="w-6"
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
                      className="w-6"
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
            )
          })}
        </section>
      </section>
    </>
  )
}

export default workshopName

export const getServerSideProps = async (context: any) => {
  const name = await context.query.workshopName.replace('-', ' ')
  // const workshopInfo = await getWorkshopByName(name);
  return { props: { name } }
}
