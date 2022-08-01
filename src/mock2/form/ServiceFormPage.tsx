import { useServices } from 'mock2/context/service.context'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const inititalState = {
  name: '',
  description: ''
}

const ServiceFormPage = () => {
  const [service, setService] = useState(inititalState)

  const { services, createService, updateService }: any = useServices()
  const router = useRouter()

  const handleChange = (e: any) => setService({ ...service, [e.target.name]: e.target.value })

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!router.query.id) {
      createService(service.name, service.description)
    } else {
      updateService(router.query.id, service)
    }

    console.log(service)

    // router.push("/");
  }

  useEffect(() => {
    if (router.query.id) {
      const serviceFound = services.find((service: any) => service.id === router.query.id)

      if (serviceFound)
        setService({ name: serviceFound.name, description: serviceFound.description })
    }
  }, [router.query.id])

  return (
    <div className="flex justify-center items-center h-full">
      <form className="bg-gray-700 p-10 h-2/4" onSubmit={handleSubmit}>
        <h1 className="text-3xl mb-7">{router.query.id ? 'Edit Task' : 'New Task'}</h1>
        <input
          type="text"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          placeholder="Write a name"
          autoFocus
          name="name"
          onChange={handleChange}
          value={service.name}
        />
        <textarea
          cols={2}
          placeholder="Write a Description"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          name="description"
          onChange={handleChange}
          value={service.description}
        ></textarea>

        <button
          className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30"
          disabled={!service.name}
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default ServiceFormPage
