import { CalcularNuevoPrecio } from '../CalcularNuevoPrecio'

export const ProductsData = [
  {
    id: 1,
    name: '',
    description: '',
    price_old: 2,
    price_new: CalcularNuevoPrecio(25, 10, true)
  }
]
