import { useCreateAppointment } from '@hooks/useCreateAppointment'

type Props = {
  formCreateAppointment: any
}

const ReserveView = (props: Props) => {
  const { handleChange } = useCreateAppointment()
  // workshop: '',
  // service: '',
  // typeVehicle: '',
  // pickUpHome: '',
  // description: '',
  // date: '',
  // hour: ''
  const dataVerifyReserve = [
    {
      id: 1,
      name: 'Taller',
      valor: props.formCreateAppointment.workshop
    },
    {
      id: 2,
      name: 'Servicio',
      valor: props.formCreateAppointment.service
    },
    {
      id: 3,
      name: 'Tipo de vehiculo',
      valor: props.formCreateAppointment.typeVehicle
    },
    {
      id: 4,
      name: 'Recojo a domicilio',
      valor: props.formCreateAppointment.pickUpHome
    },
    {
      id: 5,
      name: 'Descripción',
      valor: props.formCreateAppointment.description
    },
    {
      id: 6,
      name: 'Fecha',
      valor: props.formCreateAppointment.date
    },
    {
      id: 7,
      name: 'Hora',
      valor: props.formCreateAppointment.hour
    }
  ]

  return (
    <>
      <section className="grid gap-2">
        {dataVerifyReserve.map(item => {
          const { id, name, valor } = item
          return (
            <div key={id} className="grid grid-cols-2 gap-5">
              <strong className="text-end font-bold">{name}</strong>
              <p className="text-start">{valor}</p>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default ReserveView
