import React from 'react'

const TABLE_HEAD = [
  {
    id: 1,
    name: ''
  },
  {
    id: 2,
    name: 'Código'
  },
  {
    id: 3,
    name: 'Ruc'
  },
  {
    id: 4,
    name: 'Taller'
  },
  {
    id: 5,
    name: 'Vendedor'
  },
  {
    id: 6,
    name: 'Total'
  },
  {
    id: 7,
    name: ''
  }
]

const TABLE_BODY = [
  {
    id: 101,
    items: [
      {
        id: 1,
        name: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        )
      },
      {
        id: 2,
        name: 'C0001'
      },
      {
        id: 3,
        name: '1263045087'
      },
      {
        id: 4,
        name: 'San Vicente'
      },
      {
        id: 5,
        name: 'Rodríguez'
      },
      {
        id: 6,
        name: 'S/. 260.00'
      },
      {
        id: 7,
        name: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5"
            viewBox="0 0 16 16"
          >
            <path d="M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z" />
            <path
              fillRule="evenodd"
              d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"
            />
          </svg>
        )
      }
    ]
  }
]

type Props = {}

const Table = (props: Props) => {
  return (
    <div className="bg-red-200 container flex justify-center mx-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {TABLE_HEAD.map(item => {
              const { id, name } = item
              return (
                <th key={id} scope="col" className={`py-2 border-r border-primary-400`}>
                  {name}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className="bg-white">
          {TABLE_BODY.map(item => {
            const { id, items } = item
            return (
              <tr key={id} className={`border-b border-primary-400`}>
                {items.map(bodyItem => (
                  <>
                    <td
                      key={bodyItem.id}
                      className={`w-28 sticky left-0 border-r p-2 border-primary-400 last:bg-red-300`}
                    >
                      {bodyItem.name}
                    </td>
                  </>
                ))}
              </tr>
            )
          })}
          {/* <tr className="whitespace-nowrap">
            <td className="px-6 py-4 text-sm text-gray-500">1</td>
            <td className="px-6 py-4">
              <div className="text-sm text-gray-900">Jon doe</div>
            </td>
            <td className="px-6 py-4">
              <div className="text-sm text-gray-500">jhondoe@example.com</div>
            </td>
            <td className="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
            <td className="px-6 py-4">
              <a href="#" className="px-4 py-1 text-sm text-white bg-blue-400 rounded">
                Edit
              </a>
            </td>
            <td className="px-6 py-4">
              <a href="#" className="px-4 py-1 text-sm text-white bg-red-400 rounded">
                Delete
              </a>
            </td>
          </tr>
          <tr className="whitespace-nowrap">
            <td className="px-6 py-4 text-sm text-gray-500">1</td>
            <td className="px-6 py-4">
              <div className="text-sm text-gray-900">Jon doe</div>
            </td>
            <td className="px-6 py-4">
              <div className="text-sm text-gray-500">jhondoe@example.com</div>
            </td>
            <td className="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
            <td className="px-6 py-4">
              <a href="#" className="px-4 py-1 text-sm text-white bg-blue-400 rounded">
                Edit
              </a>
            </td>
            <td className="px-6 py-4">
              <a href="#" className="px-4 py-1 text-sm text-white bg-red-400 rounded">
                Delete
              </a>
            </td>
          </tr>
          <tr className="whitespace-nowrap">
            <td className="px-6 py-4 text-sm text-gray-500">1</td>
            <td className="px-6 py-4">
              <div className="text-sm text-gray-900">Jon doe</div>
            </td>
            <td className="px-6 py-4">
              <div className="text-sm text-gray-500">jhondoe@example.com</div>
            </td>
            <td className="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
            <td className="px-6 py-4">
              <a href="#" className="px-4 py-1 text-sm text-white bg-blue-400 rounded">
                Edit
              </a>
            </td>
            <td className="px-6 py-4">
              <a href="#" className="px-4 py-1 text-sm text-white bg-red-400 rounded">
                Delete
              </a>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default Table
