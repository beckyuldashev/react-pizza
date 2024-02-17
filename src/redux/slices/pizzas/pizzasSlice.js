import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzasStatus',
  async (REQUEST_URL) => {
    const res = await axios.get(REQUEST_URL.baseURL, {
      params: { ...REQUEST_URL.params },
    });

    return res.data; 
  }
);

const initialState = {
  items: [],
  status: 'loading'
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    })

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = 'success'
      state.items = action.payload;
    })
    
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error'
      state.items = [];
    })
  },
})

export const selectorPizzas = (state) => state.pizzas;

export const {setItems} = pizzasSlice.actions;

export default pizzasSlice.reducer;