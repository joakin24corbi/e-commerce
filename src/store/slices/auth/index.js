import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const configuration = {
  key: 'auth',
  storage
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user
    },
    logout: (state) => {
      state.user = null
    },
    update: (state, action) => {
      state.user = action.payload.user
    }
  }
})

export const { login, logout, update } = authSlice.actions;

export default persistReducer(configuration, authSlice.reducer);
