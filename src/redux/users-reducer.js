const SHOW_MORE = 'SHOW_MORE'
const FOLLOW = 'FOLLOW'

const initialState = {
  users: [
    {
      id: 1,
      followed: true,
      avatar: 'http://www.sarkidunyasi.com/img/21/93/daft-punk-300x214.jpg',
      firstName: 'Настя',
      location: {city: 'Москва', country: 'Россия'},
      userStatus: 'всем привет'
    },
    {
      id: 2,
      followed: true,
      avatar: 'http://www.sarkidunyasi.com/img/21/93/daft-punk-300x214.jpg',
      firstName: 'Вася',
      location: {city: 'Санкт-Петербург', country: 'Нарния'},
      userStatus: 'не беспокоить'
    },
    {
      id: 3,
      followed: false,
      avatar: 'http://www.sarkidunyasi.com/img/21/93/daft-punk-300x214.jpg',
      firstName: 'Cтеша',
      location: {city: 'Екатеринбург', country: 'Россия'},
      userStatus: 'голод'
    },
  ]
}

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MORE':
      return {
        ...state,
        users: [...state.users, action.users] 
      }
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return {...user, followed: (!user.followed)}
          }
          return user
          })}
    default: 
      return state
  }
}

export const showMoreActionCreator = (users) => ({type: SHOW_MORE, users})
export const followActionCreator = (userId, follow) => ({type: FOLLOW, follow, id: userId})

export default usersReducer

