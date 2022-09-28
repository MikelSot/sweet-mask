import Banner from '@components/templates/banner'
import { useUser } from '@hooks/useUser'
import DataView from '@modules/Appointment/components/data/DataView'
import DateView from '@modules/Appointment/components/date/DateView'
import ReserveView from '@modules/Appointment/components/reserve/ReserveView'
import { useState } from 'react'

import { useAppointments } from '../../mock2/context/appointment.context'

const inititalState = {
  workshop: '',
  service: '',
  typeVehicle: '',
  pickUpHome: '',
  description: '',
  date: '',
  hour: ''
}

const AppointmentView = () => {
  const [toggleTab, setToggleTab] = useState(1)
  const [formCreateAppointment, setFormCreateAppointment] = useState(inititalState)

  const { isUserLogin } = useUser()
  const { createAppointment } = useAppointments()

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

  const previousChange = e => {
    e.preventDefault()
    if (toggleTab + 1 < 1) {
      return
    }

    setToggleTab(toggleTab - 1)
  }

  const nextChange = e => {
    e.preventDefault()
    if (toggleTab + 1 > 3) {
      return
    }

    setToggleTab(toggleTab + 1)
  }

  const handleChange = e =>
    setFormCreateAppointment({ ...formCreateAppointment, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()

    if (!isUserLogin) {
      return alert('Debe iniciar sesion')
    }

    createAppointment(formCreateAppointment)

    setFormCreateAppointment(inititalState)
    setToggleTab(1)
  }

  return (
    <>
      {/* BANNER */}
      <Banner
        isHome={false}
        className={
          'w-full h-80 md:min-h-[27rem] pt-28 pb-10 md:pb-16 bg-gradient-to-tr from-primary-600 to-primary-800 grid place-items-center responsive-screen-width'
        }
        title="RESERVAR CITA"
      />
      {/* TABS - FORMULARIO */}
      <section
        className={`text-primary-700 grid responsive-screen-gap ${
          !isUserLogin && 'bg-white responsive-screen-width responsive-screen-height'
        }`}
      >
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
        <section className="">
          {/* {contentTabs[toggleTab](handleChange, formCreateAppointment, setDescription)} */}
          {toggleTab === 1 ? (
            <DataView handleChange={handleChange} formCreateAppointment={formCreateAppointment} />
          ) : toggleTab === 2 ? (
            <DateView handleChange={handleChange} formCreateAppointment={formCreateAppointment} />
          ) : (
            <ReserveView formCreateAppointment={formCreateAppointment} />
          )}
        </section>
        <div className="flex justify-center gap-5">
          {toggleTab !== 1 && (
            <button
              type="button"
              className={`w-32 text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-8 py-2 text-center
            `}
              onClick={e => previousChange(e)}
            >
              Atrás
            </button>
          )}

          {toggleTab < 3 ? (
            <button
              type="button"
              className={`w-32 text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-8 py-2 text-center
           `}
              onClick={e => nextChange(e)}
            >
              Siguiente
            </button>
          ) : (
            <button
              type="button"
              className={`w-32 text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-8 py-2 text-center
            `}
              onClick={handleSubmit}
            >
              Confirmar
            </button>
          )}
        </div>
      </section>
    </>
  )
}

export default AppointmentView
