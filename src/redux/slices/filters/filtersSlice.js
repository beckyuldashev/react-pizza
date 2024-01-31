import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectCategory: 0,
  sortCategory: {
    title: 'популярности',
    sortProp: 'rating',
  }
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.selectCategory = action.payload; 
    },
    changeSort: (state, action) => {
      state.sortCategory = action.payload;
    },
  },
})

export const { changeCategory, changeSort } = filtersSlice.actions

export default filtersSlice.reducer