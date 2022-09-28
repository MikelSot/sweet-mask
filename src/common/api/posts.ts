import axios from 'axios'

const API = process.env.REACT_APP_API || 'http://localhost:3005'

const TYPE_API = {
  users: 'users',
  products: 'products',
  services: 'services'
}

export const getProductById = async (id: number) => {
  const { data } = await axios.get(`${API}/products/${id}`)
  return data
}

export const getProducts = async () => {
  const { data } = await axios.get(`${API}/products`)
  return data
}

export const createNewProduct = async (id: {}) => {
  const { data } = await axios.post(`${API}/products`, id)
  return data
}
