import Banner from '@components/templates/banner'
import Section from '@components/templates/section'
import DataView from '@modules/Appointment/components/data/DataView'
import DateView from '@modules/Appointment/components/date/DateView'
import ReserveView from '@modules/Appointment/components/reserve/ReserveView'
import { useState } from 'react'

import { useAppointments } from './../../mock2/context/appointment.context'

const contentTabs: { [key: number]: any } = {
  1: (props: any) => (
    <DataView
      setFormAppointment={props.setFormCreateAppointment}
      handleChange={props.handleChange}
    />
  ),
  2: (props: any) => (
    <DateView
      setFormAppointment={props.setFormCreateAppointment}
      handleChange={props.handleChange}
    />
  ),
  3: () => <ReserveView />
}

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

  const { appointments, createAppointment }: any = useAppointments()

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

  const previousChange = (e: any) => {
    e.preventDefault()
    if (toggleTab + 1 < 1) {
      return
    }

    setToggleTab(toggleTab - 1)
  }

  const nextChange = (e: any) => {
    e.preventDefault()
    if (toggleTab + 1 > 3) {
      return
    }

    setToggleTab(toggleTab + 1)
  }

  const handleChange = (e: any) =>
    setFormCreateAppointment({ ...formCreateAppointment, [e.target.name]: e.target.value })

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (formCreateAppointment.service) {
      createAppointment(
        formCreateAppointment.workshop,
        formCreateAppointment.service,
        formCreateAppointment.typeVehicle,
        formCreateAppointment.pickUpHome,
        formCreateAppointment.description,
        formCreateAppointment.date,
        formCreateAppointment.hour
      )
    }

    console.log(formCreateAppointment)
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
      <section className="bg-white text-primary-700 grid responsive-screen-gap responsive-screen-width responsive-screen-height">
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
        <section className="bg-white">
          {/* {toggleTab === 1 ? (
            <DataView setFormAppointment={setFormCreateAppointment} />
          ) : toggleTab === 2 ? (
            <DateView setFormAppointment={setFormCreateAppointment} />
          ) : (
            <ReserveView />
          )} */}

          {contentTabs[toggleTab](setFormCreateAppointment, handleChange)}
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
