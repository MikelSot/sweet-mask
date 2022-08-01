import { useRouter } from 'next/router'
import React, { useState } from 'react'

const itemsInputForm = [
  {
    id: 1,
    label: 'Nombre',
    placeholder: 'Juan',
    typeInput: 'text',
    htmlFor: 'name-edit',
    isSelect: false
  },
  {
    id: 2,
    label: 'Apellidos',
    placeholder: 'Francia Sánchez',
    typeInput: 'text',
    htmlFor: 'lastname-edit',
    isSelect: false
  },
  {
    id: 3,
    label: 'Teléfono / Celular',
    placeholder: '987654321',
    typeInput: 'text',
    htmlFor: 'phone-edit',
    isSelect: false
  },
  {
    id: 4,
    label: 'DNI',
    placeholder: '74580126',
    typeInput: 'text',
    htmlFor: 'dni-edit',
    isSelect: false
  },
  {
    id: 5,
    label: 'Género',
    placeholder: 'Seleccionar',
    typeInput: 'text',
    htmlFor: 'select-gender',
    isSelect: true,
    options: [
      {
        id: 51,
        label: 'Masculino',
        value: 'masculino'
      },
      {
        id: 52,
        label: 'Femenino',
        value: 'femenino'
      }
    ]
  },
  {
    id: 6,
    label: 'Distrito',
    placeholder: 'Cerro Azul',
    typeInput: 'text',
    htmlFor: 'district-edit',
    isSelect: false
  },
  {
    id: 7,
    label: 'Dirección',
    placeholder: 'Av. Brasil Mz. 8 Lt. 1',
    typeInput: 'text',
    htmlFor: 'direction-edit',
    isSelect: false
  },
  {
    id: 8,
    label: 'Instagram',
    placeholder: '---',
    typeInput: 'text',
    htmlFor: 'instagram-edit',
    isSelect: false
  },
  {
    id: 9,
    label: 'Facebook',
    placeholder: '---',
    typeInput: 'text',
    htmlFor: 'facebook-edit',
    isSelect: false
  },
  {
    id: 10,
    label: 'Twitter',
    placeholder: '---',
    typeInput: 'text',
    htmlFor: 'twitter-edit',
    isSelect: false
  }
]

/*



*/

const EditPerfilPersonal = () => {
  const router = useRouter()

  return (
    <form className="grid grid-cols-2 gap-8">
      {itemsInputForm.map(item => {
        const { id, label, placeholder, typeInput, htmlFor, isSelect, options } = item
        return !isSelect ? (
          <div key={id} className="w-full grid gap-5">
            <label htmlFor={htmlFor}>{label}</label>
            <input
              className="w-full appearance-none border-2 border-gray-200 rounded-lg px-4 py-2 text-primary-800 leading-tight placeholder-gray-800 focus:outline-none focus:bg-white focus:border-primary-500"
              id={htmlFor}
              type={typeInput}
              placeholder={placeholder}
            />
          </div>
        ) : (
          <div key={id} className="w-full grid gap-5">
            <label htmlFor={htmlFor}>{label}</label>
            <div className="relative">
              <select
                id={htmlFor}
                className="form-select appearance-none block w-full px-4 py-2 text-base font-normal text-primary-800 bg-clip-padding bg-no-repeat border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-primary-800 focus:bg-white focus:border-primary-500 focus:outline-none"
                aria-label="Select service"
              >
                <option value="default" disabled selected>
                  {placeholder}
                </option>
                {options?.map(item => {
                  const { id, label, value } = item
                  return (
                    <option key={id} value={value}>
                      {label}
                    </option>
                  )
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary-800">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        )
      })}
      <div className="col-span-2 flex gap-8 items-center justify-center">
        <button
          type="button"
          className="bg-red-700/60 w-max px-8 py-2 text-center rounded-lg text-gray-100"
          onClick={() => router.back()}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-blue-800/60 w-max px-8 py-2 text-center rounded-lg text-gray-100"
        >
          Guardar
        </button>
      </div>
    </form>
  )
}

const EditPerfilCuenta = () => {
  const router = useRouter()

  return (
    <form className="grid grid-cols-2 gap-8">
      <div className="col-span-1 w-full grid gap-5">
        <label htmlFor="login-user">Correo</label>
        <input
          className="w-full appearance-none border-2 border-gray-200 rounded-lg px-4 py-2 text-primary-800 leading-tight placeholder-primary-800 focus:outline-none focus:bg-white focus:border-primary-500"
          id="login-user"
          type="email"
          // placeholder="Escriba su usuario"
        />
      </div>
      <span className="col-span-2 ">Editar contraseña:</span>
      <div className="col-span-1 w-full grid gap-5">
        <label htmlFor="login-user">Contraseña</label>
        <input
          className="w-full appearance-none border-2 border-gray-200 rounded-lg px-4 py-2 text-primary-800 leading-tight placeholder-primary-800 focus:outline-none focus:bg-white focus:border-primary-500"
          id="login-user"
          type="email"
          // placeholder="Escriba su usuario"
        />
      </div>
      <div className="col-span-1 w-full grid gap-5">
        <label htmlFor="login-user">Confirmar contraseña</label>
        <input
          className="w-full appearance-none border-2 border-gray-200 rounded-lg px-4 py-2 text-primary-800 leading-tight placeholder-primary-800 focus:outline-none focus:bg-white focus:border-primary-500"
          id="login-user"
          type="email"
          // placeholder="Escriba su usuario"
        />
      </div>
      <div className="col-span-2 flex gap-8 items-center justify-center">
        <button
          type="button"
          className="bg-red-700/60 w-max px-8 py-2 text-center rounded-lg text-gray-100"
          onClick={() => router.back()}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-blue-800/60 w-max px-8 py-2 text-center rounded-lg text-gray-100"
        >
          Guardar
        </button>
      </div>
    </form>
  )
}

const itemsTabs = [
  {
    id: 1,
    name: 'Información personal'
  },
  {
    id: 2,
    name: 'Información de la cuenta'
  }
]

const contentTabs: { [key: number]: any } = {
  1: () => <EditPerfilPersonal />,
  2: () => <EditPerfilCuenta />
}

type Props = {}

const Index = (props: Props) => {
  const [numToggleTab, setNumToggleTab] = useState(1)

  return (
    <>
      <div className="grid place-items-center gap-8 mt-6">
        <span className="text-xl font-bold">EDITAR PERFIL</span>
        <div className="w-40 h-40 relative">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full border border-primary-800 rounded-full overflow-hidden"
            src="/imagenes/user/perfil/profile-person.jpg"
          />
          <div className="absolute bottom-0 right-0 p-2 rounded-full bg-white border border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg>
          </div>
        </div>
      </div>
      <section className="mt-24 mb-12 m-auto grid grid-cols-8 gap-5">
        <div className="col-start-2 col-span-6 flex flex-col gap-10">
          <div className="grid grid-cols-2">
            {itemsTabs.map(item => {
              const { id, name } = item
              return (
                <button
                  key={id}
                  className={`font-bold py-3 ${
                    numToggleTab === id
                      ? 'bg-white text-blue-800/80 border-x border-t border-blue-800/80'
                      : 'text-gray-800/80 border-b border-blue-800/80'
                  }`}
                  onClick={() => setNumToggleTab(id)}
                >
                  {name}
                </button>
              )
            })}
          </div>
          <div>{contentTabs[numToggleTab]()}</div>
        </div>
      </section>
    </>
  )
}

export default Index
