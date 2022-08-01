import { useUser } from '@hooks/useUser'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const optionHeaderUser = [
  {
    id: 1,
    name: 'Perfil',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-5"
        viewBox="0 0 16 16"
      >
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
    ),
    url: '/perfil'
  },
  {
    id: 2,
    name: 'Historial citas',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-5"
        viewBox="0 0 16 16"
      >
        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      </svg>
    ),
    url: '/#citas'
  },
  {
    id: 3,
    name: 'Historial compras',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-5"
        viewBox="0 0 16 16"
      >
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
      </svg>
    ),
    url: '#compras'
  },
  {
    id: 4,
    name: 'Cerrar sesión',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-5"
        viewBox="0 0 16 16"
      >
        <path d="M7.5 1v7h1V1h-1z" />
        <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
      </svg>
    ),
    url: null,
    onClick: () => {
      alert('logout')
    }
  }
]

type Props = {}

const HeaderUser = (props: Props) => {
  const [isOptionsHeader, setIsOptionsHeader] = useState(false)

  const router = useRouter()
  const { isUserLogin, onChangleLogout } = useUser()

  return (
    <header className="sticky top-0 bg-white h-20 flex items-center justify-between p-8 border-b border-gray-300">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-5"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <div className="flex gap-8">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
          </svg>
        </button>
        <div className="flex gap-4 items-center">
          <div className="h-12 rounded-full overflow-hidden">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full"
              src="/imagenes/nosotros/nosotros-mecanico.png"
            />
          </div>
          <p>Juan Francia Sánchez</p>
          {isOptionsHeader ? (
            <button onClick={() => setIsOptionsHeader(!isOptionsHeader)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                />
              </svg>
            </button>
          ) : (
            <button onClick={() => setIsOptionsHeader(!isOptionsHeader)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {isOptionsHeader && (
        <div
          className={`w-60 rounded-lg overflow-hidden bg-primary-800 text-gray-100 fixed top-20 right-8`}
          onClick={() => setIsOptionsHeader(!isOptionsHeader)}
        >
          {optionHeaderUser.map(item => {
            const { id, name, icon, url, onClick } = item
            return !onClick ? (
              <Link key={id} href={`/${isUserLogin}${url}`}>
                <a
                  className={`w-full py-4 pl-8 flex gap-4 items-center last:border-t border-gray-500/20 ${
                    router.asPath === `/${isUserLogin}${url}`
                      ? 'bg-blue-800'
                      : 'text-gray-500 hover:bg-blue-800 hover:text-gray-100'
                  }`}
                >
                  {icon}
                  <span>{name}</span>
                </a>
              </Link>
            ) : (
              <button
                key={id}
                className={`w-full py-4 pl-8 flex gap-4 items-center last:border-t border-gray-500/20 ${
                  router.query.username === `/@juan/edit`
                    ? 'bg-blue-800'
                    : 'text-gray-500 hover:bg-blue-800 hover:text-gray-100'
                }`}
                onClick={onChangleLogout}
              >
                {icon}
                <span>{name}</span>
              </button>
            )
          })}
        </div>
      )}
    </header>
  )
}

export default HeaderUser
