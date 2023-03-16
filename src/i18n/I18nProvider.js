import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/es';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/es';
import esMessages from './es';

moment.tz.setDefault('GMT');

const I18nContext = createContext();

const I18nProvider = ({ children }) => {
  const i18n = useSelector(({ i18n }) => i18n);
  const locale = i18n.lang;
  const timezone = i18n.timezone;

  const getLocaleValue = (json) => {
    if (!json) {
      return null;
    }

    if (typeof json === 'string') {
      return json;
    } else if (locale in json) {
      return json[locale];
    } else if ('es' in json) {
      return json['es'];
    }

    const keys = Object.keys(json);
    
    if (keys.length === 0) {
      return undefined;
    } else {
      return json[keys[0]];
    }
  };

  const messages = {
    es: esMessages
  }[locale];

  moment.locale(locale);

  return (
    <I18nContext.Provider value={{ getLocaleValue, timezone }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </I18nContext.Provider>
  );
}

export { I18nContext };

export default I18nProvider;
