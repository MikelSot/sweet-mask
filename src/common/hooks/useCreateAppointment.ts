import { useState } from 'react'

interface InitialState {
  workshop: string
  service: string
  typeVehicle: string
  pickUpHome: string
  description: string
  date: string
  hour: string
}

const inititalState: InitialState = {
  workshop: '',
  service: '',
  typeVehicle: '',
  pickUpHome: '',
  description: '',
  date: '',
  hour: ''
}

export const useCreateAppointment = () => {
  const [formCreateAppointment, setFormCreateAppointment] = useState(inititalState)

  const handleChange2 = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormCreateAppointment({ ...formCreateAppointment, [e.target.name]: e.target.value })
    console.log(formCreateAppointment)
  }

  const showLocalStorage: {} = () => window.localStorage.getItem('Clave')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    window.localStorage.setItem(
      'Clave',
      JSON.stringify({
        ...showLocalStorage,
        [e.target.name]: [e.target.value]
      })
    )

  const handleInitial = () => setFormCreateAppointment(inititalState)

  return { formCreateAppointment, handleChange, handleInitial }
}
