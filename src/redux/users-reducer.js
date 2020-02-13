const ADD_USERS = 'ADD_USERS'
const FOLLOW = 'FOLLOW'
const ADD_PAGE = 'ADD_PAGE'
const CHANGE_PAGE_USERS = 'CHANGE_PAGE_USERS'

const initialState = {
  users: [
    // {
    //   "name": "MakeConstNotVar",
    //   "id": 5927,
    //   "uniqueUrlName": null,
    //   "photos": {
    //     "small": null,
    //     "large": null
    //   },
    //   "status": null,
    //   "followed": false
    // }
  ],
  totalCount: 0,
  usersAtPageCount: 4,
  currentPage: 1
}

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return {
        ...state,
        totalCount: action.totalCount,
        users: [...state.users, ...action.users] 
      }
    case 'ADD_PAGE':
      return {
        ...state,
        currentPage: action.page
      }
    case 'CHANGE_PAGE_USERS':
    return {
      ...state,
      users: [...action.users] 
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

export const showMoreActionCreator = (users, totalCount) => ({type: ADD_USERS, users, totalCount})
export const followActionCreator = (userId, follow) => ({type: FOLLOW, follow, id: userId})
export const changePageActionCreator = (page) => ({type: ADD_PAGE, page})
export const changePageUsersActionCreator = (users) => ({type: CHANGE_PAGE_USERS, users})


export default usersReducer

