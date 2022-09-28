import { useUser } from '@hooks/useUser'
import Link from 'next/link'
import React from 'react'

type Props = {
  isHome: boolean
  className: string
  title: string
  description?: string
  buttons?: []
  nameImage?: string
  urlImage?: string
}

const index = (props: Props) => {
  const { isUserLogin } = useUser()

  return (
    <section className={`${props.className} ${isUserLogin && 'hidden'}`}>
      {props.isHome ? (
        <div className="w-full flex flex-col md:flex-row justify-between mx-auto gap-12 md:gap-0">
          <div className="w-12/12 md:w-6/12 grid text-gray-100 gap-8">
            <h1 className="text-center text-xl md:text-3xl md:text-start lg:text-4xl font-bold">
              {props.title}
            </h1>
            <p className="text-center md:text-start md:text-lg lg:text-xl">{props.description}</p>
            <div className="flex gap-12 justify-center md:justify-start">
              {props.buttons?.map(item => {
                const { id, name, typeButton, url } = item
                return (
                  <Link key={id} href={url}>
                    <a
                      type="button"
                      className={`rounded-md px-4 py-1.5 md:px-8 md:py-2.5 grid place-items-center transition-colors duration-300 ${
                        typeButton !== 'primary'
                          ? 'text-primary-700 bg-gray-100 hover:bg-gray-200'
                          : 'text-gray-100 border border-gray-100 hover:bg-gray-200 hover:text-primary-700'
                      }
`}
                    >
                      {name}
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>

          <img
            alt={props.nameImage}
            className="h-full m-auto w-8/12 md:w-5/12" // object-cover
            src={props.urlImage}
          />
        </div>
      ) : (
        <div className="grid gap-6">
          <h1 className="text-gray-100 text-center text-xl md:text-3xl md:text-start lg:text-4xl font-bold">
            {props.title}
          </h1>
          <div className="w-3/6 m-auto flex-grow border-t-2 border-gray-100"></div>
        </div>
      )}
    </section>
  )
}

export default index
