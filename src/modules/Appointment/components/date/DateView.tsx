
const TABLE_HEAD = [
  {
    id: 1,
    name: 'Horario'
  },
  {
    id: 2,
    name: 'LU'
  },
  {
    id: 3,
    name: 'MA'
  },
  {
    id: 4,
    name: 'MI'
  },
  {
    id: 5,
    name: 'JU'
  },
  {
    id: 6,
    name: 'VI'
  },
  {
    id: 7,
    name: 'SA'
  },
  {
    id: 8,
    name: 'DO'
  }
]

const TABLE_BODY = [
  {
    id: 1000,
    items: [
      {
        id: 1001,
        name: '07 : 00 AM'
      },
      {
        id: 1002,
        name: true
      },
      {
        id: 1003,
        name: false
      },
      {
        id: 1004,
        name: false
      },
      {
        id: 1005,
        name: false
      },
      {
        id: 1006,
        name: true
      },
      {
        id: 1007,
        name: false
      },
      {
        id: 1008,
        name: true
      }
    ]
  },
  {
    id: 2000,
    items: [
      {
        id: 2001,
        name: '08 : 00 AM'
      },
      {
        id: 2002,
        name: false
      },
      {
        id: 2003,
        name: false
      },
      {
        id: 2004,
        name: true
      },
      {
        id: 2005,
        name: false
      },
      {
        id: 2006,
        name: false
      },
      {
        id: 2007,
        name: true
      },
      {
        id: 2008,
        name: false
      }
    ]
  },
  {
    id: 3000,
    items: [
      {
        id: 3001,
        name: '09 : 00 AM'
      },
      {
        id: 3002,
        name: true
      },
      {
        id: 3003,
        name: false
      },
      {
        id: 3004,
        name: true
      },
      {
        id: 3005,
        name: false
      },
      {
        id: 3006,
        name: true
      },
      {
        id: 3007,
        name: true
      },
      {
        id: 3008,
        name: false
      }
    ]
  },
  {
    id: 4000,
    items: [
      {
        id: 4001,
        name: '10 : 00 AM'
      },
      {
        id: 4002,
        name: false
      },
      {
        id: 4003,
        name: true
      },
      {
        id: 4004,
        name: false
      },
      {
        id: 4005,
        name: false
      },
      {
        id: 4006,
        name: true
      },
      {
        id: 4007,
        name: false
      },
      {
        id: 4008,
        name: true
      }
    ]
  },
  {
    id: 5000,
    items: [
      {
        id: 5001,
        name: '11 : 00 AM'
      },
      {
        id: 5002,
        name: false
      },
      {
        id: 5003,
        name: false
      },
      {
        id: 5004,
        name: true
      },
      {
        id: 5005,
        name: true
      },
      {
        id: 5006,
        name: false
      },
      {
        id: 5007,
        name: true
      },
      {
        id: 5008,
        name: false
      }
    ]
  },
  {
    id: 6000,
    items: [
      {
        id: 6001,
        name: '12 : 00 PM'
      },
      {
        id: 6002,
        name: true
      },
      {
        id: 6003,
        name: false
      },
      {
        id: 6004,
        name: false
      },
      {
        id: 6005,
        name: true
      },
      {
        id: 6006,
        name: false
      },
      {
        id: 6007,
        name: true
      },
      {
        id: 6008,
        name: false
      }
    ]
  },
  {
    id: 7000,
    items: [
      {
        id: 7001,
        name: '01 : 00 PM'
      },
      {
        id: 7002,
        name: true
      },
      {
        id: 7003,
        name: false
      },
      {
        id: 7004,
        name: true
      },
      {
        id: 7005,
        name: false
      },
      {
        id: 7006,
        name: false
      },
      {
        id: 7007,
        name: true
      },
      {
        id: 7008,
        name: false
      }
    ]
  },
  {
    id: 8000,
    items: [
      {
        id: 8001,
        name: '02 : 00 PM'
      },
      {
        id: 8002,
        name: false
      },
      {
        id: 8003,
        name: false
      },
      {
        id: 8004,
        name: true
      },
      {
        id: 8005,
        name: true
      },
      {
        id: 8006,
        name: true
      },
      {
        id: 8007,
        name: false
      },
      {
        id: 8008,
        name: false
      }
    ]
  },
  {
    id: 9000,
    items: [
      {
        id: 9001,
        name: '03 : 00 PM'
      },
      {
        id: 9002,
        name: true
      },
      {
        id: 9003,
        name: true
      },
      {
        id: 9004,
        name: false
      },
      {
        id: 9005,
        name: true
      },
      {
        id: 9006,
        name: false
      },
      {
        id: 9007,
        name: true
      },
      {
        id: 9008,
        name: false
      }
    ]
  },
  {
    id: 10000,
    items: [
      {
        id: 10001,
        name: '04 : 00 PM'
      },
      {
        id: 10002,
        name: false
      },
      {
        id: 10003,
        name: false
      },
      {
        id: 10004,
        name: true
      },
      {
        id: 10005,
        name: false
      },
      {
        id: 10006,
        name: true
      },
      {
        id: 10007,
        name: true
      },
      {
        id: 10008,
        name: true
      }
    ]
  },
  {
    id: 11000,
    items: [
      {
        id: 11001,
        name: '05 : 00 PM'
      },
      {
        id: 11002,
        name: true
      },
      {
        id: 11003,
        name: true
      },
      {
        id: 11004,
        name: true
      },
      {
        id: 11005,
        name: false
      },
      {
        id: 11006,
        name: true
      },
      {
        id: 11007,
        name: false
      },
      {
        id: 11008,
        name: false
      }
    ]
  },
  {
    id: 12000,
    items: [
      {
        id: 12001,
        name: '06 : 00 PM'
      },
      {
        id: 12002,
        name: true
      },
      {
        id: 12003,
        name: false
      },
      {
        id: 12004,
        name: false
      },
      {
        id: 12005,
        name: true
      },
      {
        id: 12006,
        name: false
      },
      {
        id: 12007,
        name: true
      },
      {
        id: 12008,
        name: true
      }
    ]
  }
]

type Props = {
  formCreateAppointment: any
  handleChange: any
}

const DateView = (props: Props) => {
  const OperationDate = () => {
    let hoy = new Date()
    let dieciseisDias = 1000 * 60 * 60 * 24 * 16
    let resta = hoy.getTime() - dieciseisDias
    let fechaDeHaceDieciseisDias = new Date(resta)
  }

  return (
    <section className="grid gap-8 grid-cols-1 lg:grid-cols-3">
      <div className="md:col-span-2 overflow-x-auto">
        <table className="table-auto w-[37rem] sm:w-full border border-primary-400 text-center overflow-x-scroll">
          <thead className="border-b border-primary-400 bg-primary-200">
            <tr>
              {TABLE_HEAD.map(item => {
                const { id, name } = item
                return (
                  <th
                    key={id}
                    scope="col"
                    className={`py-2 border-r border-primary-400 ${
                      item.id === 1 && 'sticky left-0 bg-primary-200'
                    }`}
                  >
                    {name}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {TABLE_BODY.map(item => {
              const { id, items } = item
              return (
                <tr
                  key={id}
                  className={`border-b border-primary-400 ${id % 2 === 0 && 'bg-primary-200'}`}
                >
                  {items.map(days => (
                    <>
                      {typeof days.name === 'string' ? (
                        <td
                          key={days.id}
                          className={`w-28 sticky left-0 border-r p-2 border-primary-400 ${
                            id % 2 === 0 ? 'bg-primary-200' : 'bg-white'
                          }`}
                        >
                          {days.name}
                        </td>
                      ) : (
                        <td key={days.id} className={`border-r p-2 w-16 border-primary-400`}>
                          {days.name === true && (
                            <div className="w-full h-7 rounded bg-green-500 m-auto"></div>
                          )}
                        </td>
                      )}
                    </>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="grid gap-4 content-start md:col-span-1">
        <p className="text-red-500">*Las fechas y horas disponibles se actualizan cada semana</p>
        <div className="flex gap-2 items-center">
          <div className="w-12 h-7 rounded bg-green-500"></div>
          <span>Disponibles</span>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          <div className="grid gap-2">
            <span>FECHA:</span>
            <div className="md:col-span-2">
              <div className="inline-block relative w-full">
                <select
                  className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-primary-80 bg-gray-200 bg-clip-padding bg-no-repeat border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-primary-800 focus:bg-white focus:border-primary-500 focus:outline-none"
                  name="date"
                  value={props.formCreateAppointment.date}
                  onChange={props.handleChange}
                >
                  <option value="default" selected disabled>
                    Seleccionar
                  </option>
                  <option value="Lunes">Lunes</option>
                  <option value="Martes">Martes</option>
                  <option value="Miércoles">Miércoles</option>
                  <option value="Jueves">Jueves</option>
                  <option value="Viernes">Viernes</option>
                  <option value="Sábado">Sábado</option>
                  <option value="Domingo">Domingo</option>
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
          </div>
          <div className="grid gap-2">
            <span>HORA:</span>
            <div className="md:col-span-2">
              <div className="inline-block relative w-full">
                <select
                  className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-primary-80 bg-gray-200 bg-clip-padding bg-no-repeat border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-primary-800 focus:bg-white focus:border-primary-500 focus:outline-none"
                  name="hour"
                  value={props.formCreateAppointment.hour}
                  onChange={props.handleChange}
                >
                  <option value="default" selected disabled>
                    Seleccionar
                  </option>
                  <option value="07 : 00 AM">07 : 00 AM</option>
                  <option value="08 : 00 AM">08 : 00 AM</option>
                  <option value="09 : 00 AM">09 : 00 AM</option>
                  <option value="10 : 00 AM">10 : 00 AM</option>
                  <option value="11 : 00 AM">11 : 00 AM</option>
                  <option value="12 : 00 PM">12 : 00 PM</option>
                  <option value="01 : 00 PM">01 : 00 PM</option>
                  <option value="02 : 00 PM">02 : 00 PM</option>
                  <option value="03 : 00 PM">03 : 00 PM</option>
                  <option value="04 : 00 PM">04 : 00 PM</option>
                  <option value="05 : 00 PM">05 : 00 PM</option>
                  <option value="06 : 00 PM">06 : 00 PM</option>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default DateView

/*
<td key={days.id} className={`border-r ${days.id === 1 ? '' : 'p-2 w-6'}`}>
  {typeof days.name === 'string'
    ? days.name
    : days.name === true && (
        <div className="w-full h-7 rounded bg-green-500 m-auto"></div>
      )}
</td>
*/
