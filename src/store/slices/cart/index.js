import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const configuration = {
  key: 'cart',
  storage
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: []
  },
  reducers: {
    addProduct: (state, action) => {
      let existingProductIndex = state.list.findIndex((item) => 
        item.id === action.payload.id
      );
      
      if (existingProductIndex >= 0) {
        state.list[existingProductIndex].amount += action.payload.amount;
      } else {
        state.list.push(action.payload);
      }
    },
    removeProduct: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id)
    },
    updateProductAmount: (state, action) => {
      let existingProductIndex = state.list.findIndex((item) => 
        item.id === action.payload.id
      );
      
      if (existingProductIndex >= 0) {
        state.list[existingProductIndex].amount += action.payload.amount;
      }
    },
    clear: (state) => {
      state.list = []
    }
  }
})

export const { addProduct, removeProduct, updateProductAmount, clear } = cartSlice.actions;

export default persistReducer(configuration, cartSlice.reducer);
