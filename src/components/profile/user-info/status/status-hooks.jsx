import React, { useState } from 'react'

const StatusHooks = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.userStatus)

  const setEditModeOn = () => {
    setEditMode(true)
  }

  const setEditModeOff = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (evt) => {
    setStatus(evt.target.value)
  }

  return (
    <div>
      {
        editMode
        ? <input 
            autoFocus={true} 
            onBlur={setEditModeOff} 
            value={status} 
            type='text'
            onChange={(evt) => {onStatusChange(evt)}}
          />
        : <span onDoubleClick={setEditModeOn}>{props.userStatus ? props.userStatus : 'enter status...'}</span>
      }
    </div>
  )
}


export default StatusHooks
