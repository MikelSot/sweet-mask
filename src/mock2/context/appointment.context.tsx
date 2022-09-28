import { AppointmentData } from 'mock2/data/appointment.data'
import { createContext, useContext, useState } from 'react'

export const AppointmentContext = createContext({})

type Props = {
  children: React.ReactNode
}

export const AppointmentProvider = (props: Props) => {
  const [appointments, setAppointments] = useState(AppointmentData)

  const createAppointment = (
    workshop: string,
    service: string,
    typeVehicle: string,
    pickUpHome: string,
    description: string,
    date: string,
    hour: string
  ): any =>
    setAppointments([
      ...appointments,
      {
        id: appointments.length + 1 || 1,
        workshop,
        service,
        typeVehicle,
        pickUpHome,
        description,
        date,
        hour
      }
    ])

  return (
    <AppointmentContext.Provider value={{ appointments, createAppointment }}>
      {props.children}
    </AppointmentContext.Provider>
  )
}

export const useAppointments = () => useContext(AppointmentContext)
