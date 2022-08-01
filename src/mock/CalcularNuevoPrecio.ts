export const CalcularNuevoPrecio = (
  price_old: number,
  discount: number,
  isPorcentage: boolean
): number => {
  const numeric_porcentage = discount / 100
  const discount_new = isPorcentage ? price_old * numeric_porcentage : discount
  const new_price = price_old - discount_new

  return new_price
}

// console.log(CalcularNuevoPrecio(135,4,true))

// console.log(CalcularNuevoPrecio(150,20,false))
