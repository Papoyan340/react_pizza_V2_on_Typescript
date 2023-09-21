import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
   'pizzas/fetchPizzasStatus',
   async (params, thunkAPI) => {
      const { category, order, sortBy, search, pageCount } = params;
      
      const url = `  https://6471f2906a9370d5a41adb75.mockapi.io/items?page=${pageCount}&limit=4&${category}sortBy=${sortBy}&order=${order}${search}`;
      const { data } = await axios.get(url);
      if (data.length === 0) {
         return thunkAPI.rejectWithValue('пиццы отсутствуют');
      }
      return thunkAPI.fulfillWithValue(data);
   },
);

const initialState = {
   dataPizzas: [],
   status: 'loading', // loading | succes | error
};

const pizzasSlice = createSlice({
   name: 'pizza',
   initialState,
   reducers: {
      setdataPizza(state, action) {
         state.dataPizzas = action.payload;
      },
   },

   // extraReducers: {
   //    [fetchPizzas.pending]: (state, action) => {
   //       state.status = 'loading';
   //       state.dataPizzas = [];
   //    },
   //    [fetchPizzas.fulfilled]: (state, action) => {
   //       state.dataPizzas = action.payload;
   //       state.status = 'succes';
   //    },
   //    [fetchPizzas.rejected]: (state, action) => {
   //       state.status = 'error';
   //       state.dataPizzas = [];
   //    },
   // },

   extraReducers: (builder) => {
      builder
         .addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading';
            state.dataPizzas = [];
         })
         .addCase(fetchPizzas.fulfilled, (state, action) => {
            state.dataPizzas = action.payload;
            state.status = 'succes';
         })
         .addCase(fetchPizzas.rejected, (state, action) => {
            console.log(action);
            state.status = 'error';
            state.dataPizzas = [];
         });
   },
});

export const selectPizzas = (state) => state.pizzas;
export const { setdataPizza } = pizzasSlice.actions;

export default pizzasSlice.reducer;
