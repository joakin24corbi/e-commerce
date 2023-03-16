import { login, logout, update } from '.'

export const doLogin = (user) => (dispatch) => {
  dispatch(login({ user: user }))
}

export const doLogout = () => (dispatch) => {
  dispatch(logout())
}

export const doUpdate = (user) => (dispatch) => {
  dispatch(update({ user: user }))
}
