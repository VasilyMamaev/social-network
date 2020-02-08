import Dialogs from './dialogs'
import { updateMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    dialogsElements: state.dialogs.dialogsElements,
    messages: state.dialogs.messages,
    newTextMessage: state.dialogs.newTextMessage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateTextHandler: (evt) => {
      dispatch(updateMessageTextActionCreator(evt.target.value))
    },
    sendMessageHandler: () => {
      dispatch(addMessageActionCreator())
    }
  }
} 

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs) 

export default DialogsContainer
