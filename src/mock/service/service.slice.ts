import { createSlice } from '@reduxjs/toolkit'

import { ServiceData } from './service.data'

const serviceSlice = createSlice({
  name: 'services',
  initialState: ServiceData,
  reducers: {
    addService: (state, action) => {
      state.push(action.payload)
    },
    editService: (state, action) => {
      const { id, name, description, image } = action.payload
      const foundService = state.find(service => service.id === id)
      if (foundService) {
        foundService.name = name
        foundService.description = description
        foundService.image = image
      }
    },
    deleteService: (state, action) => {
      const foundService = state.find(service => service.id === action.payload)
      if (foundService) {
        state.splice(state.indexOf(foundService), 1)
      }
    }
  }
})

export const { addService, editService, deleteService } = serviceSlice.actions
export default serviceSlice.reducer
