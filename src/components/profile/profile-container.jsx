import React from 'react'
import Profile from './profile'
import { updatePostTextActionCreator, addPostActionCreator } from '../../redux/profile-reducer'

function ProfileContainer(props) {

  let textChangeHandler = (evt) => {
    props.store.dispatch(updatePostTextActionCreator(evt.target.value))
  }

  let newPostHandler = () => {
    props.store.dispatch(addPostActionCreator())
  }
  
  return (
    <Profile state={props.store.getState().profile} onButtonClick={newPostHandler} onTextChange={textChangeHandler} />
  )
}

export default ProfileContainer
