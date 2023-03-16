import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const configuration = {
  key: 'favorites',
  storage
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: []
  },
  reducers: {
    addProduct: (state, action) => {
      let existingProductIndex = state.list.findIndex((item) => 
        item.id === action.payload.id
      );
      
      if (existingProductIndex < 0) {
        state.list.push(action.payload);
      }
    },
    removeProduct: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id)
    },
    clear: (state) => {
      state.list = []
    }
  }
})

export const { addProduct, removeProduct, updateProductAmount, clear } = favoritesSlice.actions;

export default persistReducer(configuration, favoritesSlice.reducer);
