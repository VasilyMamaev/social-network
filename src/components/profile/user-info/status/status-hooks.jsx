import React, { useState, useEffect } from 'react'

const StatusHooks = (props) => {

  const [editMode, setEditMode] = useState(false)
  
  const setEditModeOn = () => {
    setEditMode(true)
  }

  const setEditModeOff = () => {
    setEditMode(false)
    props.updateStatus(status)
  }


  const [status, setStatus] = useState(props.userStatus)

  const onStatusChange = (evt) => {
    setStatus(evt.target.value)
  }


  useEffect(() => {
    setStatus(props.userStatus)
  }, [props.userStatus])


  return (
    <div>
      { props.isAuth ? 
        editMode
        ? <input 
            autoFocus={true} 
            onBlur={setEditModeOff} 
            value={status} 
            type='text'
            onChange={(evt) => {onStatusChange(evt)}}
          />
        : <span onDoubleClick={setEditModeOn}>{props.userStatus ? props.userStatus : 'enter status...'}</span>
        : <span >{props.userStatus}</span>
      }
    </div>
  )
}


export default StatusHooks
