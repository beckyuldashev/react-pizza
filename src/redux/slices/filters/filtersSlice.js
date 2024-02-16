import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  currentPage: 1,
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
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    changeFilters: (state, action) => {
      state.sortCategory = action.payload.sortCategory;
      state.selectCategory = Number(action.payload.selectCategory);
      state.currentPage = Number(action.payload.currentPage);
    }
  },
})

export const { changeCategory, changeSort, changeCurrentPage, changeSearchValue, changeFilters } = filtersSlice.actions

export default filtersSlice.reducer