const dataVerifyReserve = [
  {
    id: 1,
    name: 'Taller',
    valor: 'San Vicente - Cañete'
  },
  {
    id: 2,
    name: 'Servicio',
    valor: 'Cambio de aceite'
  },
  {
    id: 3,
    name: 'Tipo de vehiculo',
    valor: 'Nuevo'
  },
  {
    id: 4,
    name: 'Recojo a domicilio',
    valor: 'No'
  },
  {
    id: 5,
    name: 'Descripción',
    valor: 'El vehiculo necesita cambio de aceite.'
  },
  {
    id: 6,
    name: 'Fecha',
    valor: '12/06/2022'
  },
  {
    id: 7,
    name: 'Hora',
    valor: '02 : 00 P.M.'
  }
]

type Props = {}

const ReserveView = (props: Props) => {
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
