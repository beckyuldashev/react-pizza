import { configureStore } from '@reduxjs/toolkit'

import filtersReducer from './slices/filters/filtersSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer
  },
})