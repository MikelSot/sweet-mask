import React from 'react'

type Props = {}

const ModalRegister = (props: Props) => {
  return (
    <>
      <div className="grid gap-6">
        <div className="w-full grid grid-cols-2 gap-5">
          <div className="w-full grid gap-4">
            <label htmlFor="register-name">Nombre</label>
            <input
              className="w-full appearance-none border-2 border-gray-200 rounded-lg px-4 py-2 text-primary-800 leading-tight placeholder-primary-800 focus:outline-none focus:bg-white focus:border-primary-500"
              id="register-name"
              type="text"
              // placeholder="Escriba su usuario"
            />
          </div>
          <div className="w-full grid gap-4">
            <label htmlFor="register-firstname">Apellidos</label>
            <input
              className="w-full appearance-none border-2 border-gray-200 rounded-lg px-4 py-2 text-primary-800 leading-tight placeholder-primary-800 focus:outline-none focus:bg-white focus:border-primary-500"
              id="register-firstname"
              type="password"
              // placeholder="Escriba su contraseña"
            />
          </div>
        </div>

        <div className="w-full grid gap-4">
          <label htmlFor="register-email">Email</label>
          <input
            className="w-full appearance-none border-2 border-gray-200 rounded-lg px-4 py-2 text-primary-800 leading-tight placeholder-primary-800 focus:outline-none focus:bg-white focus:border-primary-500"
            id="register-email"
            type="password"
            // placeholder="Escriba su contraseña"
          />
        </div>

        <div className="w-full grid grid-cols-2 gap-5">
          <div className="w-full grid gap-4">
            <label htmlFor="register-password">Contraseña</label>
            <input
              className="w-full appearance-none border-2 border-gray-200 rounded-lg px-4 py-2 text-primary-800 leading-tight placeholder-primary-800 focus:outline-none focus:bg-white focus:border-primary-500"
              id="register-password"
              type="text"
              // placeholder="Escriba su usuario"
            />
          </div>
          <div className="w-full grid gap-4">
            <label htmlFor="register-confirm-password">Confirmar contraseña</label>
            <input
              className="w-full appearance-none border-2 border-gray-200 rounded-lg px-4 py-2 text-primary-800 leading-tight placeholder-primary-800 focus:outline-none focus:bg-white focus:border-primary-500"
              id="register-confirm-password"
              type="password"
              // placeholder="Escriba su contraseña"
            />
          </div>
        </div>
      </div>
      <div className="grid gap-6 mb-8">
        <p className="text-red-500">Aceptar los terminos y condiciones</p>
        <button
          type="button"
          className={`w-full m-auto text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-4 py-2 text-center
          `}
        >
          Crear cuenta
        </button>
        <p className="text-right">
          ¿Ya tienes cuenta? <span className="text-red-500">Iniciar Sesión</span>
        </p>
      </div>
    </>
  )
}

export default ModalRegister
