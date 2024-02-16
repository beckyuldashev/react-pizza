import { configureStore } from '@reduxjs/toolkit'

import filtersReducer from './slices/filters/filtersSlice';
import cartReducer from './slices/cart/cartSlice';
import pizzasReducer from './slices/pizzas/pizzasSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cart: cartReducer,
    pizzas: pizzasReducer
  },
})