import ModalLogin from '@components/molecules/modal/ModalLogin'
import ModalRegister from '@components/molecules/modal/ModalRegister'
import Link from 'next/link'
import React from 'react'

type Props = {}

const ModalTemplate = (props: any) => {
  return (
    <>
      <section
        className={`${
          props.isModal ? 'fixed' : 'hidden'
        } w-full h-screen fixed top-0 left-0 transform transition duration-300 ease-in-out bg-primary-700/60 grid place-items-center text-primary-700 z-20`}
      >
        <div
          className={` ${
            props.type === 'modal-login' ? 'w-[32rem]' : 'w-[32rem]'
          } grid gap-8 bg-white p-6 rounded-xl`}
        >
          <div className="relative flex items-center">
            <p className="pt-10 font-bold text-center w-full text-lg">Bienvenido (a)</p>
            <button
              className="absolute top-0 right-0 p-2 transform transition-color duration-300 ease-in-out rounded-lg hover:bg-red-700/60 hover:text-gray-100"
              onClick={props.handleModal}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="Close-icon"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <button
              className={`text-center py-2 border-b ${
                props.type === 'modal-login'
                  ? 'border-primary-700 text-primary-700'
                  : 'border-gray-500 text-gray-500'
              } `}
              onClick={() => props.setIsModalLogin(true)}
            >
              Iniciar Sesión
            </button>
            <button
              className={`text-center py-2 border-b ${
                props.type === 'modal-register'
                  ? 'border-primary-700 text-primary-700'
                  : 'border-gray-500 text-gray-500'
              } `}
              onClick={() => props.setIsModalLogin(false)}
            >
              Crear cuenta
            </button>
          </div>
          {props.type === 'modal-login' ? (
            <ModalLogin
              closeModal={props.handleModal}
              // handleModal={props.handleModal}
            />
          ) : (
            <ModalRegister />
          )}
        </div>
      </section>
    </>
  )
}

export default ModalTemplate
