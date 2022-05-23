import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import categoryFilterSlice from './slices/filters/categoryFilterSlice'
import priceFilterSlice from './slices/filters/priceFilterSlice'
import productsSlice from './slices/productsSlice'
import uiSlice from './slices/uiSlice'

export const store = configureStore({
  reducer: {
    cart:cartSlice,
    products:productsSlice,
    categoryFilters: categoryFilterSlice,
    priceFilter: priceFilterSlice,
    cartUi:uiSlice
  }
})