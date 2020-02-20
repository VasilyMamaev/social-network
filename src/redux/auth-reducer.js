import { usersAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
  id: null,
  //logged user id
  email: null,
  //logged user email
  login: null,
  //user login
  isAuth: false
}

let authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.data,
        isAuth: true
      } 
    default:
       return state
  }
}

export const setUserDataAC = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const getAuthUserDataTC = () => {
  return (dispatch) => {
    usersAPI.authMe().then((response) => {
      if (response.resultCode === 0) {
        let {id,email,login} = response.data
        dispatch(setUserDataAC(id, email, login))
      }
    })
  }
}

export default authReducer