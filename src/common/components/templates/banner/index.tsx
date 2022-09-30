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
        <div className="w-full flex flex-col md:flex-row justify-between mx-auto gap-12 lg:gap-32">
          <div className="w-full lg:w-6/12 grid text-gray-100 gap-8">
            <h1 className="text-center text-xl md:text-3xl lg:text-start lg:text-4xl font-bold">
              {props.title}
            </h1>
            <p className="text-center text-sm_grey-500 lg:text-start md:text-lg lg:text-xl lg:leading-8">
              {props.description}
            </p>
            <div className="flex gap-12 justify-center lg:justify-start">
              {props.buttons?.map(item => {
                const { id, name, typeButton, url } = item
                return (
                  <Link key={id} href={url}>
                    <a
                      type="button"
                      className={`h-12 rounded-md px-4 grid place-items-center transition-colors duration-300 ${
                        typeButton !== 'primary'
                          ? 'text-sm_primary-700 border border-sm_primary-700'
                          : 'text-sm_grey-600 bg-sm_primary-700'
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
            className="h-full m-auto w-8/12 hidden md:w-5/12 lg:block" // object-cover
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
