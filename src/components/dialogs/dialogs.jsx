import React from 'react'
import classes from './dialogs.module.css'
import DialogItem from './dialog-item/dialog-item'
import Chat from './chat/chat'

const Messages = (props) => {

  let dialogsElements = props.state.dialogsElements.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
  let chatElements = props.state.messages.map((message) => <Chat>{message}</Chat>)

  let newMessageElement = React.createRef()
  let sendMessage = props.addMessage
  let sendMessageHandler = () => {
    let message = newMessageElement.current.value
    sendMessage(message)
    newMessageElement.current.value = ''
  }

  return (
    <div className={classes.Dialogs}>
      <div className={classes.DialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.Chat}>
        { chatElements }
        <input type="text" placeholder="text message..." ref={newMessageElement}/>
        <button onClick={ sendMessageHandler }>send</button>
      </div>
    </div>
  )
}

export default Messages
