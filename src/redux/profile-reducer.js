import { usersAPI, userProfileAPI } from "../api/api"

const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
  userInfo: null,
  userPosts: [
    'Шёл сегодня с работы домой, на улице темнотища, иду с фонариком. Смотрю, впереди на снегу необычные образования. Пригляделся - следы :) По свежевыпавшему пушистому снегу прошлись, а потом ветер выдул весь снег, оставив только спрессованные ногами следы от ботинок. Впервые такое вижу.',
    'Как-то стороной обходили Поль Бейкери, а оказывается там весьма неплохо.'
  ],
  newPostText: '',
  userStatus: ''
}


let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE': 
      return {
        ...state,
        userInfo: {
          ...action.userInfo,
          contacts: action.userInfo.contacts,
          photos: action.userInfo.photos
        }
      }
    case 'UPDATE-POST-TEXT':
      return {
        ...state,
        newPostText: action.text
      }
    case 'ADD-POST': {
      let stateCopy = {
        ...state
      }
      stateCopy.userPosts = [...state.userPosts]
      if (stateCopy.newPostText !== '') {
        stateCopy.userPosts.push(stateCopy.newPostText)
        stateCopy.newPostText = ''
      }
      return stateCopy
    }
    case 'SET_STATUS': 
      return {
        ...state,
        userStatus: action.userStatus
      }
    default:
      return state
  }
}

export let updatePostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text
})
export let addPostActionCreator = (text) => ({
  type: ADD_POST,
  text
})
export let setProfileActionCreator = (userInfo) => ({
  type: SET_PROFILE,
  userInfo
})
export let setStatusAC = (userStatus) => ({
  type: SET_STATUS,
  userStatus
})

export let getProfileTC = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setProfileActionCreator(response))    
    })
  }
}

export let getStatusTC = (userId) => {
  return (dispatch) => {
    userProfileAPI.getStatus(userId).then((response) => {
      dispatch(setStatusAC(response))
    })
  }
}


export default profileReducer