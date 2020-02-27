import { userAuthAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

let authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.data,
      } 
    default:
       return state
  }
}

export const setUserDataAC = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}})

export const getAuthUserDataTC = () => {
  return (dispatch) => {
    userAuthAPI.authMe().then((response) => {
      if (response.resultCode === 0) {
        let {id,email,login} = response.data
        dispatch(setUserDataAC(id, email, login, true))
      }
    })
  }
}

export const loginTC = (email, password, rememberMe) => {
  return (dispatch) => {
    userAuthAPI.userLogin(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataTC(email, password, rememberMe))
      }
    })
  }
}

export const logoutTC = () => {
  return (dispatch) => {
    userAuthAPI.userLogout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
      }
    })
  }
}

export default authReducer