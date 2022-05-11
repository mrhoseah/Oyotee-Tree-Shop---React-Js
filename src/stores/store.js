import { configureStore } from '@reduxjs/toolkit'
import productSlice from './products/productSlice'
import userSlice from './users/userSlice'

export const store = configureStore({
  reducer: {
    products: productSlice,
    user:userSlice
  }
})
