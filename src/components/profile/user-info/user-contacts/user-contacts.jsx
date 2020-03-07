import React from 'react'
import classes from './user-contacts.module.css'
import { useState } from 'react'
import UserContactsReduxForm from './user-contats-form/user-contacts-form'

const UserContacts = React.memo((props) => {

  let [editMode, setEditMode] = useState(false)

  const contacts = Object.keys(props.userInfo.contacts).map(key => {
  return <div>{key}<span>{props.userInfo.contacts[key]}</span></div>
  })

  const onSubmit = async (formData) => {
    await props.updateUserContacts(formData)
    setEditMode(false)
  }
  
  if (editMode) {
    return (
      <UserContactsReduxForm onSubmit={onSubmit} initialValues={props.userInfo}/>
    )
  } else {
    return (
      <div>
        { !props.isAuth ? null : <button onClick={() => setEditMode(true)}>editMode</button> }
        <div>About me<span>{props.userInfo.aboutMe}</span></div>
        contacts:<tr/>
        <div className={classes.contacts}>
          {contacts}
        </div>
        <div>lookingForAJob<span>{props.userInfo.contacts.lookingForAJob ? 'yes' : 'no' }</span></div>
        <div>lookingForAJobDescription<span>{props.userInfo.lookingForAJobDescription}</span></div>
        <div>fullName<span>{props.userInfo.fullName}</span></div>
      </div>
    )
  }
})

export default UserContacts
