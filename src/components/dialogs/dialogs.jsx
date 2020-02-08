import React from 'react'
import classes from './dialogs.module.css'
import DialogItem from './dialog-item/dialog-item'
import Chat from './chat/chat'

const Dialogs = (props) => {

  let dialogsElements = props.dialogsElements.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
  let chatElements = props.messages.map((message) => <Chat>{message}</Chat>)

  return (
    <div className={classes.Dialogs}>
      <div className={classes.DialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.Chat}>
        { chatElements }
        <input type="text" placeholder="text message..." value={props.newTextMessage} onChange={props.updateTextHandler}/>
        <button onClick={props.sendMessageHandler}>send</button>
      </div>
    </div>
  )
}

export default Dialogs
