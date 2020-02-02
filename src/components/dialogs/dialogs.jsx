import React from 'react'
import classes from './dialogs.module.css'
import DialogItem from './dialog-item/dialog-item'
import Chat from './chat/chat'

const Messages = (props) => {

  let dialogsElements = props.state.dialogsElements.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />
  })

  let chatElements = props.state.messages.map((message) => {
    return <Chat>{message}</Chat>
  })

  return (
    <div className={classes.Dialogs}>
      <div className={classes.DialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.Chat}>
        { chatElements }
      </div>
    </div>
  )
}

export default Messages
