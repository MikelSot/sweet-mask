import { ProductData } from 'mock2/data/product.data'
import { createContext, useContext, useState } from 'react'

export const ProductContext = createContext({})

type Props = {
  children: React.ReactNode
}

export const ProductProvider = (props: Props) => {
  const [products, setProducts] = useState(ProductData)

  const createProduct = (
    nameImage: string,
    urlImage: string = '/imagenes/productos/PBT USA Heavy Duty Wrack Wre.jpg',
    description: string,
    price: number
  ): void =>
    setProducts([
      ...products,
      { id: products.length + 1 || 1, nameImage, urlImage, description, price }
    ])

  const updateProduct = (id: number, updatedProduct: any) =>
    setProducts([
      ...products.map(product => (product.id === id ? { ...product, ...updatedProduct } : product))
    ])

  const deleteProduct = (id: number) =>
    setProducts([...products.filter(product => product.id !== id)])

  return (
    <ProductContext.Provider value={{ products, createProduct, updateProduct, deleteProduct }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)
