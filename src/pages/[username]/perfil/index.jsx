import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import { useAppointments } from '../../../mock2/context/appointment.context'

const itemsAboutPerfil = [
  {
    id: 1,
    name: 'Nombres y apellidos',
    value: 'Juan Francia Sánchez',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-10"
        viewBox="0 0 16 16"
      >
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
    )
  },
  {
    id: 2,
    name: 'Género',
    value: 'Masculino',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-10"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1H11.5zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z"
        />
      </svg>
    )
  },
  {
    id: 3,
    name: 'DNI',
    value: '735841206',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-10"
        viewBox="0 0 16 16"
      >
        <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z" />
      </svg>
    )
  },
  {
    id: 4,
    name: 'Distrito',
    value: 'Cerro Azul',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-10"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
        />
        <path
          fillRule="evenodd"
          d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
        />
      </svg>
    )
  },
  {
    id: 5,
    name: 'Dirección',
    value: 'Calle 13 de la Av. Brasil Mz. B Lt. 8 S/N',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-10"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
        />
        <path
          fillRule="evenodd"
          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
        />
      </svg>
    )
  }
]

const itemsContactsPerfil = [
  {
    id: 1,
    name: 'Email',
    value: 'juan@gmail.com',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-10"
        viewBox="0 0 16 16"
      >
        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
      </svg>
    )
  },
  {
    id: 2,
    name: 'Teléfono / Celular',
    value: '987654321',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-10"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
        />
      </svg>
    )
  },
  {
    id: 3,
    name: 'Instagram',
    value: '---',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-10"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
      </svg>
    )
  },
  {
    id: 4,
    name: 'Facebook',
    value: '---',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-10"
        viewBox="0 0 16 16"
      >
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
      </svg>
    )
  },
  {
    id: 5,
    name: 'Twitter',
    value: '---',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-10"
        viewBox="0 0 16 16"
      >
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
      </svg>
    )
  }
]

const TabPerfil = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-7 bg-white border border-gray-300 p-10 flex flex-col gap-8">
        <span className="text-lg font-bold">SOBRE MI</span>
        {itemsAboutPerfil.map(item => {
          const { id, name, value, icon } = item
          return (
            <div key={id} className="flex gap-5 items-start">
              {icon}
              <div className="grid gap-2">
                <span className="text-lg font-bold">{name}</span>
                <span>{value}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className="col-span-5 bg-white border border-gray-300 p-10 flex flex-col gap-8">
        <span className="text-lg font-bold">CONTACTO</span>
        {itemsContactsPerfil.map(item => {
          const { id, name, value, icon } = item
          return (
            <div key={id} className="flex gap-5 items-start">
              {icon}
              <div className="grid gap-2">
                <span className="text-lg font-bold">{name}</span>
                <span className="text-blue-800">{value}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const itemsReserveAppointment = [
  {
    id: 1,
    typeReserve: 'CAMBIO DE ACEITE',
    labelWorkshop: 'Taller',
    valueWorkshop: 'San Vicente - Cañete',
    labelDateTime: 'Fecha y hora',
    valueDateTime: '12/06/2022 - 02:00 P.M.',
    labelTypeVehicle: 'Tipo de vehículo',
    valueTypeVehicle: 'Nuevo',
    labelDelivery: 'Recojo a domicilio',
    valueDelivery: 'No',
    labelDescription: 'Descripción',
    valueDescription: 'Sin descripción'
  },
  {
    id: 2,
    typeReserve: 'LAVADO VEHICULAR',
    labelWorkshop: 'Taller',
    valueWorkshop: 'Mala - Cañete',
    labelDateTime: 'Fecha y hora',
    valueDateTime: '26/05/2022 - 12:00 P.M.',
    labelTypeVehicle: 'Tipo de vehículo',
    valueTypeVehicle: 'Usado',
    labelDelivery: 'Recojo a domicilio',
    valueDelivery: 'Si',
    labelDescription: 'Descripción',
    valueDescription: 'Sin descripción'
  },
  {
    id: 3,
    typeReserve: 'REVISIÓN VEHICULAR',
    labelWorkshop: 'Taller',
    valueWorkshop: 'Asia - Cañete',
    labelDateTime: 'Fecha y hora',
    valueDateTime: '04/04/2022 - 10:00 A.M.',
    labelTypeVehicle: 'Tipo de vehículo',
    valueTypeVehicle: 'Usado',
    labelDelivery: 'Recojo a domicilio',
    valueDelivery: 'No',
    labelDescription: 'Descripción',
    valueDescription: 'Sin descripción'
  },
  {
    id: 4,
    typeReserve: 'CAMBIO DE ACEITE',
    labelWorkshop: 'Taller',
    valueWorkshop: 'San Vicente - Cañete',
    labelDateTime: 'Fecha y hora',
    valueDateTime: '05/03/2022 - 05:00 P.M.',
    labelTypeVehicle: 'Tipo de vehículo',
    valueTypeVehicle: 'Nuevo',
    labelDelivery: 'Recojo a domicilio',
    valueDelivery: 'No',
    labelDescription: 'Descripción',
    valueDescription: 'Sin descripción'
  }
]

const TabHistoryAppointment = () => {
  const { appointments } = useAppointments()

  return (
    <div className="grid grid-cols-12 gap-5">
      {appointments.map(item => {
        const { id, workshop, service, typeVehicle, pickUpHome, description, date, hour } = item
        return (
          <div
            key={id}
            className="col-span-6 bg-white border border-gray-300 p-10 flex flex-col gap-8 rounded-lg"
          >
            <span className="text-center font-bold">{service}</span>
            <div className="grid gap-3">
              <p>
                <span className="font-bold">{'Taller'}</span>
                {`: ${workshop}`}
              </p>
              <p>
                <span className="font-bold">{'Fecha y hora'}</span>
                {`: ${date} - ${hour}`}
              </p>
              <p>
                <span className="font-bold">{'Tipo de vehículo'}</span>
                {`: ${typeVehicle}`}
              </p>
              <p>
                <span className="font-bold">{'Recojo a domicilio'}</span>
                {`: ${pickUpHome}`}
              </p>
              <p className="grid gap-2">
                <span className="font-bold">{`Descripción:`}</span>
                <span>{description}</span>
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

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
    id: 1,
    items: [
      {
        id: 101,
        name: (
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        )
      },
      {
        id: 102,
        name: 'C0001'
      },
      {
        id: 103,
        name: '1263045087'
      },
      {
        id: 104,
        name: 'San Vicente'
      },
      {
        id: 105,
        name: 'Rodríguez'
      },
      {
        id: 106,
        name: 'S/. 260.00'
      },
      {
        id: 107,
        name: (
          <button>
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
          </button>
        )
      }
    ]
  },
  {
    id: 2,
    items: [
      {
        id: 201,
        name: (
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        )
      },
      {
        id: 202,
        name: 'C0002'
      },
      {
        id: 203,
        name: '1263045087'
      },
      {
        id: 204,
        name: 'Cerro Azul'
      },
      {
        id: 205,
        name: 'Fernandez'
      },
      {
        id: 206,
        name: 'S/. 28.00'
      },
      {
        id: 207,
        name: (
          <button>
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
          </button>
        )
      }
    ]
  }
]

const TabHistoryBuy = () => {
  return (
    <div>
      <table className="table-auto w-[37rem] sm:w-full border border-primary-400 text-center overflow-x-scroll">
        <thead className="border-b border-primary-400 bg-primary-200">
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
        <tbody>
          {TABLE_BODY.map(item => {
            const { id, items } = item
            return (
              <tr key={id} className={`border-b border-primary-400`}>
                {items.map(bodyItem => (
                  <>
                    <td
                      key={bodyItem.id}
                      className={`w-28 sticky left-0 border-r p-2 border-primary-400 `}
                    >
                      {bodyItem.name}
                    </td>
                  </>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const itemsTabs = [
  {
    id: 1,
    name: 'Perfil'
  },
  {
    id: 2,
    name: 'Historial de citas'
  },
  {
    id: 3,
    name: 'Historial de compras'
  },
  {
    id: 4,
    name: 'Revisión técnica'
  }
]

const contentTabs = {
  1: () => <TabPerfil />,
  2: () => <TabHistoryAppointment />,
  3: () => <TabHistoryBuy />,
  4: () => ''
}

const Index = props => {
  const [numToggleTab, setNumToggleTab] = useState(1)

  const router = useRouter()

  console.log({ router })

  return (
    <>
      {/* BANNER */}
      <section className="w-full h-80 relative">
        <div className="h-full">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg overflow-hidden"
            src="/imagenes/user/perfil/profile-cover.jpg"
          />
        </div>
        <div className="absolute left-20 -bottom-12 flex gap-10">
          <div className="w-40 h-40 rounded-full overflow-hidden border border-primary-800">
            <img
              alt="gallery"
              className="block object-cover object-center w-full h-full"
              src="/imagenes/user/perfil/profile-person.jpg"
            />
          </div>
          <div className="grid gap-4 content-start text-gray-100 py-4">
            <p className="text-3xl font-bold">Juan Francia</p>
            <p className="text-lg">{`${router.query.username} - Cliente`}</p>
          </div>
        </div>
        <Link href={`${router.asPath}/editar`}>
          <a className="absolute right-20 bottom-6 px-4 py-2 bg-white rounded-md flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-5"
              viewBox="0 0 16 16"
            >
              <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z" />
            </svg>
            <span>Editar perfil</span>
          </a>
        </Link>
      </section>
      {/* TABS */}
      <div className="mt-24 grid gap-10">
        <section className="grid grid-cols-4">
          {itemsTabs.map(item => {
            const { id, name } = item
            return (
              <button
                key={id}
                className={`font-bold py-3 ${
                  numToggleTab === id
                    ? 'bg-white text-blue-800/80 border-x border-t border-blue-800/80'
                    : 'text-gray-800/80 border-b border-blue-800/80'
                }`}
                onClick={() => setNumToggleTab(id)}
              >
                {name}
              </button>
            )
          })}
        </section>
        <section>{contentTabs[numToggleTab]()}</section>
      </div>
    </>
  )
}

export default Index
