const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_POST = 'ADD-POST'


let profileReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE-POST-TEXT':
      state.newPostText = action.text
      return state
    case 'ADD-POST':
      state.userPosts.push(action.text)
      state.newPostText = ''
      return state
    default:
      return state
  }
}

export let updatePostTextActionCreator = (text) => ({type:UPDATE_POST_TEXT, text})
export let addPostActionCreator = (text) => ({type:ADD_POST, text})


export default profileReducer
