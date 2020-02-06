import React from 'react'
import classes from './dialogs.module.css'
import DialogItem from './dialog-item/dialog-item'
import Chat from './chat/chat'

const Messages = (props) => {

  let dialogsElements = props.state.dialogsElements.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
  let chatElements = props.state.messages.map((message) => <Chat>{message}</Chat>)

  let newMessageElement = React.createRef()
  let sendMessage = props.addMessage
  let updateText = props.updateMessageText

  let updateTextHandler = () => {
    let text = newMessageElement.current.value
    updateText(text)
  }

  let sendMessageHandler = () => {
    let message = newMessageElement.current.value
    sendMessage(message)
  }

  return (
    <div className={classes.Dialogs}>
      <div className={classes.DialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.Chat}>
        { chatElements }
        <input type="text" placeholder="text message..." ref={newMessageElement} value={props.state.newTextMessage} onChange={updateTextHandler}/>
        <button onClick={ sendMessageHandler }>send</button>
      </div>
    </div>
  )
}

export default Messages
