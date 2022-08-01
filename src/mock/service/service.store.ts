import { configureStore } from '@reduxjs/toolkit'

import serviceSlice from './service.slice'

export const serviceStore = configureStore({
  reducer: { services: serviceSlice }
})
