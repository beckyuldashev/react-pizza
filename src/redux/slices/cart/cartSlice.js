import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find(item => item.id === action.payload.id);

      if(findItem) {
        findItem.count += 1;
      } else {
        state.items.push({...action.payload, count: 1});
      }

      state.totalCount += 1;
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action) => {
      const findItem = state.items.find(item => item.id === action.payload.id);
      
      if(action.payload.isDeleted) {
        state.totalCount -= findItem.count;
        state.totalPrice -= findItem.price * findItem.count;
        state.items = state.items.filter(obj => obj.id !== action.payload.id);
      } else {
        if(findItem.count === 1) return;

        findItem.count -= 1;
        state.totalCount -= 1;
        state.totalPrice -= action.payload.price;
      }
    },
    clearItems: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  }
})

export const {addItem, removeItem, clearItems} = cartSlice.actions;

export default cartSlice.reducer;