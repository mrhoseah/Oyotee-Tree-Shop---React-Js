import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/cartSlice'
import productsSlice from './products/productsSlice'

export const store = configureStore({
  reducer: {
    cart:cartSlice,
    products:productsSlice
  }
})