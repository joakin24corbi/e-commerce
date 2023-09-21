import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/es/integration/react';
import SplashScreen from 'views/splash-screen/SplashScreen';
import { BrowserRouter } from 'react-router-dom';
import { SettingsProvider } from 'contexts/SettingsContext';
import { StyledEngineProvider } from '@mui/styled-engine';
import I18nProvider from 'i18n/I18nProvider';
import TLTheme from 'themes/TLTheme/TLTheme';
import ScrollToTop from 'utils/ScrollToTop';
import { CssBaseline } from '@mui/material';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));

let body = document.getElementsByTagName('body')[0];
body.style.height = 'fit-content'

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<SplashScreen />}>
      <BrowserRouter>
        <SettingsProvider>
          <StyledEngineProvider injectFirst>
            <I18nProvider>
              <TLTheme>
                <ScrollToTop />
                <CssBaseline />
                <App />
              </TLTheme>
            </I18nProvider>
          </StyledEngineProvider>
        </SettingsProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// for IE-11 support un-comment cssVars() and it's import in this file
// and in MatxTheme file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
