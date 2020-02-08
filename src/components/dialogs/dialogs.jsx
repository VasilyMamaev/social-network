import React from 'react'
import classes from './dialogs.module.css'
import DialogItem from './dialog-item/dialog-item'
import Chat from './chat/chat'

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsElements.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
  let chatElements = props.state.messages.map((message) => <Chat>{message}</Chat>)

  return (
    <div className={classes.Dialogs}>
      <div className={classes.DialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.Chat}>
        { chatElements }
        <input type="text" placeholder="text message..." value={props.state.newTextMessage} onChange={props.onTextChange}/>
        <button onClick={props.onButtonClick}>send</button>
      </div>
    </div>
  )
}

export default Dialogs
