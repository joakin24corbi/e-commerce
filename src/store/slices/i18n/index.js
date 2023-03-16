import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const configuration = {
  key: 'i18n',
  storage
}

export const i18nSlice = createSlice({
  name: 'i18n',
  initialState: {
    languages: [
      { code: 'es', name: 'LANGUAGE.SPANISH' }
    ],
    lang: 'es',
    timezone: 'Europe/Madrid'
  },
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload.lang
    },
    setTimezone: (state, action) => {
      state.timezone = action.payload.timezone
    },
  }
})

export const { setLanguage, setTimezone } = i18nSlice.actions;

export default persistReducer(configuration, i18nSlice.reducer);
