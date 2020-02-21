import Dialogs from './dialogs'
import { updateMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import withUserAuth from '../../hoc/with-user-auth'

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

let WithRedirectDialogs = withUserAuth(Dialogs)

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (WithRedirectDialogs) 

export default DialogsContainer
