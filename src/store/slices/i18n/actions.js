import { setLanguage, setTimezone } from '.'

export const setLanguage = (lang) => (dispatch) => {
  dispatch(setLanguage({ lang }))
}

export const setTimezone = (timezone) => (dispatch) => {
  dispatch(setTimezone({ timezone }))
}
