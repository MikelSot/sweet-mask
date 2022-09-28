import { useUser } from '@hooks/useUser'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const itemsButtons = [
  {
    id: 1,
    name: null,
    items: [
      {
        id: 10,
        name: 'Inicio',
        url: '/',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fillRule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
        )
      }
    ]
  },
  {
    id: 2,
    name: 'Servicio',
    // url: `${router.pathname}`
    items: [
      {
        id: 21,
        name: 'Productos',
        url: '/productos',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5"
            viewBox="0 0 16 16"
          >
            <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
          </svg>
        )
      },
      {
        id: 22,
        name: 'Servicios',
        url: '/servicios',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5"
            viewBox="0 0 16 16"
          >
            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
          </svg>
        )
      },
      {
        id: 23,
        name: 'Separar cita',
        url: '/cita',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5"
            viewBox="0 0 16 16"
          >
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
          </svg>
        )
      }
    ]
  },
  {
    id: 3,
    name: 'Nosotros',
    items: [
      {
        id: 31,
        name: 'Sobre nosotros',
        url: '/nosotros',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5"
            viewBox="0 0 16 16"
          >
            <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
          </svg>
        )
      },
      {
        id: 32,
        name: 'Talleres',
        url: '#talleres',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
            />
            <path
              fillRule="evenodd"
              d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
            />
          </svg>
        )
      }
    ]
  }
]

type Props = {
  className: string
}

const SidebarUser = (props: Props) => {
  const router = useRouter()
  const { isUserLogin } = useUser()

  return (
    <aside className={props.className}>
      <h1 className="h-20 flex items-center pl-8 text-xl font-bold">AUTOPRO</h1>
      <div className="grid gap-12">
        {itemsButtons.map(item => {
          const { id, name, items } = item
          return (
            <div key={id} className="grid gap-6">
              {name && <p className="pl-8 text-gray-500"> {name} </p>}
              <div className="grid">
                {items.map(itemButton => {
                  const { id, name, url, icon } = itemButton
                  return (
                    // <Link key={id} href={`/${isUserLogin}${url}`}>
                    <Link key={id} href={`${url}`}>
                      <a
                        className={`w-full py-4 pl-8 flex gap-4 items-center ${
                          // router.asPath === `/${isUserLogin}${url}`
                          router.asPath === `${url}`
                            ? 'bg-blue-800'
                            : 'text-gray-500 hover:bg-blue-800 hover:text-gray-100'
                        }`}
                      >
                        {icon}
                        <span> {name} </span>
                      </a>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </aside>
  )
}

export default SidebarUser
