import { configureStore } from '@reduxjs/toolkit'

import filtersReducer from './slices/filters/filtersSlice';
import cartReducer from './slices/cart/cartSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cart: cartReducer,
  },
})