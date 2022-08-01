import { useState } from 'react'

type Props = {
  setFormAppointment: any
  handleChange: any
}

const DataView = (props: Props) => {
  const [isCheckboxForm, setIsCheckboxForm] = useState(false)
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <img
        alt="Reservar cita"
        className="h-auto m-auto" // object-cover
        src={'/imagenes/cita/reserva-cita.webp'}
      />
      <form className="grid gap-4 grid-cols-1 md:grid-cols-2 md:gap-6 place-content-start">
        <div className="form-check md:col-span-2">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-500 rounded-sm bg-gray-100 checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={isCheckboxForm}
            onChange={() => setIsCheckboxForm(!isCheckboxForm)}
          />
          <label
            className="form-check-label inline-block text-primary-800"
            htmlFor="flexCheckDefault"
          >
            Seleccionar un taller
          </label>
        </div>
        {isCheckboxForm && (
          <div className="md:col-span-2">
            <div className="inline-block relative w-full">
              <select
                className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-primary-80 bg-gray-200 bg-clip-padding bg-no-repeat border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-primary-800 focus:bg-white focus:border-primary-500 focus:outline-none"
                aria-label="Select service"
              >
                <option value="default" selected disabled>
                  Seleccione un taller
                </option>
                <option value="1">Mala - Cañete</option>
                <option value="2">San Vicente - Cañete</option>
                <option value="3">Asia - Cañete</option>
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
        )}
        <div className="md:col-span-2">
          <div className="inline-block relative w-full">
            <select
              className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-primary-80 bg-gray-200 bg-clip-padding bg-no-repeat border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-primary-800 focus:bg-white focus:border-primary-500 focus:outline-none"
              aria-label="Select service"
            >
              <option value="default" selected disabled>
                Seleccione un servicio
              </option>
              <option value="1">Cambio de aceite</option>
              <option value="2">Cambio de motor</option>
              <option value="3">Lavado</option>
              <option value="4">Mantenimiento</option>
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
        <div className="md:col-span-2 lg:col-span-1">
          <div className="inline-block relative w-full">
            <select
              className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-primary-80 bg-gray-200 bg-clip-padding bg-no-repeat border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-primary-800 focus:bg-white focus:border-primary-500 focus:outline-none"
              aria-label="Select service"
            >
              <option selected disabled>
                Tipo de vehículo
              </option>
              <option value="1">Nuevo</option>
              <option value="2">Antiguo</option>
              <option value="3">Usado</option>
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
        <div className="md:col-span-2 lg:col-span-1">
          <div className="inline-block relative w-full">
            <select
              className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-primary-800 bg-gray-200 bg-clip-padding bg-no-repeat border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-primary-800 focus:bg-white focus:border-primary-500 focus:outline-none"
              aria-label="Select service"
            >
              <option selected disabled>
                Recojo a domicilio
              </option>
              <option value="1">Si</option>
              <option value="2">No</option>
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
        <div className="md:col-span-2">
          <textarea
            id="message"
            rows={6}
            className="block resize-none p-2.5 w-full text-primary-800 bg-gray-200 rounded border border-gray-200 placeholder-primary-800 focus:text-primary-800 focus:bg-white focus:border-primary-500 focus:outline-none"
            placeholder="Descripción"
          ></textarea>
        </div>
      </form>
    </div>
  )
}

export default DataView
