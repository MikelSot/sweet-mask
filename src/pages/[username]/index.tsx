import { useUser } from '@hooks/useUser'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  name: String
}

const IndexUser = (props: Props) => {
  const { isUserLogin } = useUser()

  const router = useRouter()

  // if (!isUserLogin) {
  //   router.push('/')
  // }

  return (
    <div className="grid grid-cols-7 gap-5">
      <div className="col-span-4 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white border border-gray-300 p-6 grid place-items-center gap-4 rounded-lg">
            <p>3</p>
            <p>Orden de compra</p>
          </div>
          <div className="bg-white border border-gray-300 p-6 grid place-items-center gap-4 rounded-lg">
            <p>3</p>
            <p>Orden de compra</p>
          </div>
          <div className="bg-white border border-gray-300 p-6 grid place-items-center gap-4 rounded-lg">
            <p>3</p>
            <p>Orden de compra</p>
          </div>
          <div className="bg-white border border-gray-300 p-6 grid place-items-center gap-4 rounded-lg">
            <p>3</p>
            <p>Orden de compra</p>
          </div>
        </div>
        <div className="h-72 p-6 bg-white border border-gray-300 rounded-lg">IMAGE</div>
      </div>
      <div className="col-span-3 flex flex-col gap-5">
        <div className="h-80 p-6 bg-white border border-gray-300 rounded-lg">GRAFICA</div>
        <div className="bg-white border border-gray-300 rounded-lg grid gap-6 p-6">
          <div className="flex items-center justify-between">
            <p>Últimas actividades</p>
            <Link href="#!">
              <a className="text-gray-800">Ver todos</a>
            </Link>
          </div>
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.402 10.246c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-4.118 9.79c1.258 0 2-1.067 2-2.872 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684c.047.64.594 1.406 1.703 1.406zm-2.89-5.435h-.633A12.6 12.6 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675V7.354z" />
                </svg>
                <span>Reserva de cita</span>
              </div>
              <span className="text-gray-600">Hace 1 día</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
                <span>Orden de productos</span>
              </div>
              <span className="text-gray-600">Hace 5 días</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.705 8.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27.596-.894Z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm-6.202-4.751 1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.49 4.49 0 0 1-1.592-.29L4.747 14.2a7.031 7.031 0 0 1-2.949-2.951ZM12.496 8a4.491 4.491 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11c.027.2.04.403.04.61Z" />
                </svg>
                <span>Orden de servicio</span>
              </div>
              <span className="text-gray-600">Hace 1 mes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexUser

export const getServerSideProps = async (context: any) => {
  const name = await context.query.username
  // const workshopInfo = await getWorkshopByName(name);
  return { props: { name } }
}
