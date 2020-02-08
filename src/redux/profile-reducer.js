const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_POST = 'ADD-POST'

const initialState = {
  userInfo: {
    avatar: 'https://playjoor.com/assets/img/default_avis/matthew.png',
    birth: '4 августа',
    city: 'Екатеринбург',
    education: 'УрФУ',
    web_site: 'https://github.com/VasilyMamaev'
  },
  userPosts: [
    'Шёл сегодня с работы домой, на улице темнотища, иду с фонариком. Смотрю, впереди на снегу необычные образования. Пригляделся - следы :) По свежевыпавшему пушистому снегу прошлись, а потом ветер выдул весь снег, оставив только спрессованные ногами следы от ботинок. Впервые такое вижу.',
    'Как-то стороной обходили Поль Бейкери, а оказывается там весьма неплохо.'
  ],
  newPostText: ''
}


let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE-POST-TEXT':
      state.newPostText = action.text
      return state
    case 'ADD-POST':
      if (state.newPostText !== '') {
        state.userPosts.push(state.newPostText)
        state.newPostText = ''
      }
      return state
    default:
      return state
  }
}

export let updatePostTextActionCreator = (text) => ({type:UPDATE_POST_TEXT, text})
export let addPostActionCreator = (text) => ({type:ADD_POST, text})


export default profileReducer
