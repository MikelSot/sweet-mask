import { ServiceData } from 'mock2/data/service.data'
import { createContext, useContext, useState } from 'react'

export const ServiceContext = createContext({})

type Props = {
  children: React.ReactNode
}

export const ServiceProvider = (props: Props) => {
  const [services, setServices] = useState(ServiceData)

  const createService = (
    name: string,
    description: string,
    image: string = '/images/home/servicio-4.webp'
  ): void => setServices([...services, { id: services.length + 1 || 1, name, description, image }])

  const updateService = (id: number, updatedService: any) =>
    setServices([
      ...services.map(service => (service.id === id ? { ...service, ...updatedService } : service))
    ])

  const deleteService = (id: number) =>
    setServices([...services.filter(service => service.id !== id)])

  return (
    <ServiceContext.Provider value={{ services, createService, updateService, deleteService }}>
      {props.children}
    </ServiceContext.Provider>
  )
}

export const useServices = () => useContext(ServiceContext)
