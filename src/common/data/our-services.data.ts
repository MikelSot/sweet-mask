import { ICONS } from '@components/svg/icons'
import { INTERFACE_OUR_SERVICES } from '@interfaces/our-services.interface'

export const OUR_SERVICES: INTERFACE_OUR_SERVICES[] = [
  {
    id: 1,
    name: 'Asesoría mecánica',
    description: 'Puedes solicitar asesoría personalizada ante cualquier problema',
    icon: ICONS['chat_left']
  },
  {
    id: 2,
    name: 'Taller en casa u oficina',
    description: 'Puedes recibir el servicio que necesites, en el lugar en el que te encuentres',
    icon: ICONS['tools']
  },
  {
    id: 3,
    name: 'Mecánicos especialistas',
    description: 'Contamos con los mejores mecánicos para brindarte el mejor servicio',
    icon: ICONS['people']
  },
  {
    id: 4,
    name: 'Garantía del servicio',
    description: 'El servicio que recibas tiene el 100% garantia ante cualquier inconveniente',
    icon: ICONS['bookmark_check']
  }
]
