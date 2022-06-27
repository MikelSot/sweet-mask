import DataView from '@modules/Appointment/components/data/DataView'
import DateView from '@modules/Appointment/components/date/DateView'
import { useState } from 'react'

const FechaHora = () => {
  return <div>FECHA Y HORA</div>
}

const ConfirmarDatos = () => {
  return <div>CONFIRMAR DATOS</div>
}

const contentTabs = {
  1: () => <DataView />,
  2: () => <DateView />,
  3: () => ConfirmarDatos()
}

const AppointmentView = () => {
  const [toggleTab, setToggleTab] = useState(1)

  const arrayTabs = {
    datos: {
      id: 1,
      title: 'Datos personales',
      icon: ''
    },
    'fecha-hora': {
      id: 2,
      title: 'Fecha y hora',
      icon: ''
    },
    confirmar: {
      id: 3,
      title: 'Confirmar',
      icon: ''
    }
  }

  return (
    <>
      {/* BANNER */}
      <section className="w-full min-h-[27rem] pt-28 pb-16 bg-gradient-to-tr from-primary-600 to-primary-800 grid place-items-center responsive-screen-width">
        <div className="grid gap-6">
          <h1 className="text-gray-100 text-center text-xl md:text-3xl md:text-start lg:text-4xl font-bold">
            RESERVAR CITA
          </h1>
          <div className="w-3/6 m-auto flex-grow border-t-2 border-gray-100"></div>
        </div>
      </section>
      {/* TABS - FORMULARIO */}
      <section className="grid responsive-screen-gap responsive-screen-width responsive-screen-height">
        <h2 className="text-xl font-bold text-center">PASOS PARA RESERVAR UNA CITA</h2>
        <section className="w-full flex gap-4">
          <div
            className={`cursor-pointer ${
              toggleTab >= arrayTabs['datos'].id ? 'text-primary-800' : 'text-primary-800/30'
            }`}
            onClick={() => setToggleTab(arrayTabs['datos'].id)}
          >
            {arrayTabs['datos'].title}
          </div>
          <div
            className={`flex-grow border-t m-auto ${
              toggleTab >= arrayTabs['fecha-hora'].id
                ? 'border-primary-800'
                : 'border-primary-800/30'
            }`}
          ></div>
          <div
            className={`cursor-pointer ${
              toggleTab >= arrayTabs['fecha-hora'].id ? 'text-primary-800' : 'text-primary-800/30'
            }`}
            onClick={() => setToggleTab(arrayTabs['fecha-hora'].id)}
          >
            {arrayTabs['fecha-hora'].title}
          </div>
          <div
            className={`flex-grow border-t m-auto ${
              toggleTab === arrayTabs['confirmar'].id
                ? 'border-primary-800'
                : 'border-primary-800/30'
            }`}
          ></div>
          <div
            className={`cursor-pointer ${
              toggleTab >= arrayTabs['confirmar'].id ? 'text-primary-800' : 'text-primary-800/30'
            }`}
            onClick={() => setToggleTab(arrayTabs['confirmar'].id)}
          >
            {arrayTabs['confirmar'].title}
          </div>
        </section>
        <section className="bg-white">{contentTabs[toggleTab]()}</section>
        <button
          type="button"
          className={`w-max m-auto text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-8 py-2 text-center
            `}
        >
          Siguiente
        </button>
      </section>
    </>
  )
}

export default AppointmentView
