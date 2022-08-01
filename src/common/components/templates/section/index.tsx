import Link from 'next/link'
import React from 'react'

const reduceArray = (arr: []) => {
  var results = arr.reduce((i, item) => {
    return item
  }, [])
  return results
}

type Props = {
  className: string
  title?: string
  data?: []
  description?: string
  typeGallery?: string
  isSkew?: boolean
  skew?: number
  itemButton?: []
}

const index = (props: Props) => {
  return (
    <section className={props.className}>
      {props.title && props.typeGallery !== 'gridAbout' && (
        <div className="w-full grid gap-2">
          <h2 className="text-xl font-bold text-center">{props.title}</h2>
          <p className="text-center">{props.description}</p>
        </div>
      )}

      {props.typeGallery === 'galleryReceive' && (
        <section className="w-full overflow-hidden">
          <div className="container  mx-auto">
            <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5">
              {props.data?.map(item => {
                const { id, name, urlImage } = item
                return (
                  <div
                    key={id}
                    className={`w-full relative rounded-2xl border border-gray-300 overflow-hidden md:p-0 ${
                      id === 1
                        ? 'row-span-2 lg:col-span-2 lg:row-span-2 h-[15rem] lg:h-[35rem]'
                        : 'row-span-2 lg:col-span-1 lg:row-span-1'
                    }`}
                  >
                    <img
                      alt={name}
                      className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                      src={urlImage}
                    />
                    <p className="absolute bottom-0 left-0 w-full bg-primary-700/80 h-16 grid place-items-center text-center text-gray-100 font-bold px-2">
                      {name}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {props.typeGallery === 'slider' && (
        <>
          <section className="grid gap-8 md:gap-14">
            {props.data?.map(item => {
              const { id, items } = item
              return (
                <div
                  key={id}
                  className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5"
                >
                  {items?.map((itemSlider: any) => {
                    const { id, nameImage, urlImage } = itemSlider
                    return (
                      <Link key={id} href={urlImage}>
                        <a className="bg-blue-300 h-40 rounded-xl overflow-hidden relative border border-gray-300">
                          <div className="w-full h-full bg-white"></div>
                          <img
                            src={urlImage}
                            alt={nameImage}
                            className="absolute top-0 left-0 w-full h-full object-contain"
                          />
                        </a>
                      </Link>
                    )
                  })}
                </div>
              )
            })}
          </section>

          {props.itemButton?.map(item => {
            const { id, name, typeButton, url } = item
            return (
              <Link key={id} href={url}>
                <a
                  type="button"
                  className={`w-max m-auto rounded-md px-4 py-1.5 md:px-8 md:py-2.5 grid place-items-center transition-colors duration-300 ${
                    typeButton !== 'primary'
                      ? 'text-primary-700 bg-gray-100 hover:bg-gray-200'
                      : 'text-gray-100 bg-primary-700 border border-gray-100 hover:bg-gray-200 hover:text-primary-700'
                  }
`}
                >
                  {name}
                </a>
              </Link>
            )
          })}
        </>
      )}

      {props.typeGallery === 'galleryOffered' && (
        <>
          <section className="w-full overflow-hidden">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {props.data?.map(item => {
                  const { id, name, description, image } = item
                  return (
                    <div
                      key={id}
                      className="h-[15rem] md:h-[22rem] rounded-2xl border border-gray-300 overflow-hidden"
                    >
                      <img
                        alt={name}
                        className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                        src={image}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
          {props.itemButton?.map(item => {
            const { id, name, typeButton, url } = item
            return (
              <Link key={id} href={url}>
                <a
                  className={`w-max m-auto rounded-md px-4 py-1.5 md:px-8 md:py-2.5 grid place-items-center transition-colors duration-300 ${
                    typeButton !== 'primary'
                      ? 'text-primary-700 bg-gray-100 hover:bg-gray-200'
                      : 'text-gray-100 bg-primary-700 border border-gray-100 hover:bg-gray-200 hover:text-primary-700'
                  }
`}
                >
                  {name}
                </a>
              </Link>
            )
          })}
        </>
      )}

      {props.typeGallery === 'gridAbout' && (
        <>
          <div className="w-full h-auto rounded-2xl border border-gray-300 overflow-hidden">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
              src="/images/home/sobre_nosotros.jpg"
            />
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <h3 className="text-xl font-bold">{props.title}</h3>
            <p className="text-lg">{props.description}</p>

            {props.itemButton?.map(item => {
              const { id, name, typeButton, url } = item
              return (
                <Link key={id} href={url}>
                  <a
                    className={`w-max min-w-[8rem] text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-4 py-2 text-center
            `}
                  >
                    {name}
                  </a>
                </Link>
              )
            })}
          </div>
        </>
      )}

      {props.typeGallery === 'gridSkew' && (
        <section className="my-14 py-20 bg-gradient-to-tr from-primary-600 to-primary-800 -skew-y-[4deg] text-gray-100 responsive-screen-width responsive-screen-height">
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
      )}
    </section>
  )
}

export default index

/*

<section className="w-full grid grid-cols-5 gap-5">
          {itemsTaller.map(item => {
            const { id, nombre, image, link } = item
            return (
              <Link key={id} href={link}>
                <a className="bg-blue-300 h-40 rounded-xl overflow-hidden relative">
                  <img src={image} alt={nombre} className="w-full h-full" />
                  <p className="absolute top-0 left-0 w-full h-full bg-primary-700/60 text-gray-100 grid place-items-center">
                    {nombre}
                  </p>
                </a>
              </Link>
            )
          })}
        </section>

*/
