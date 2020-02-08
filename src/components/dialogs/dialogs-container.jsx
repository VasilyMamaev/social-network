import React from 'react'
import Dialogs from './dialogs'
import { updateMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer'

function DialogsContainer(props) {

  let updateTextHandler = (evt) => {
    props.store.dispatch(updateMessageTextActionCreator(evt.target.value))
  }

  let sendMessageHandler = () => {
    props.store.dispatch(addMessageActionCreator())
  }

  return (
    <Dialogs state={props.store.getState().dialogs} onTextChange={updateTextHandler} onButtonClick={sendMessageHandler}/>
  )
}

export default DialogsContainer
