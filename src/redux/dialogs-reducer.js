const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let dialogsReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE-MESSAGE-TEXT':
      state.newTextMessage = action.text
      return state
    case 'ADD-MESSAGE':
      state.messages.push(action.text)
      state.newTextMessage = ''
      return state
    default: 
      return state
  }
}

export const updateMessageTextActionCreator = (text) => ({type:UPDATE_MESSAGE_TEXT, text})
export const addMessageActionCreator = (text) => ({type:ADD_MESSAGE, text})

export default dialogsReducer
