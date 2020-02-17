import React from 'react'
import classes from './user.module.css'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../../api/api'

function User(props) {
 console.log(props)
  return (
    <div className={classes.User}>
      <div>
        <NavLink to={'/Profile/' + props.id}>
          <img src={props.avatar} alt="avatar"/>
        </NavLink>
        {
          props.followed ?
          <button onClick={() => {
            usersAPI.unfollowUser(props.id).then((resultCode) => {
              if (resultCode === 0) {
                props.followHandler(props.id, props.followed) 
              }
            })
          }}>{props.followed ? 'followed' : 'unfollowed'}</button>
          :
          <button onClick={() => {
            usersAPI.followUser(props.id).then((resultCode) => {
              if (resultCode === 0) {
                props.followHandler(props.id, props.followed) 
              }
          })
          }}>{props.followed ? 'followed' : 'unfollowed'}</button>
        }
      </div>
      <div>
        <span>{props.name}</span>
        <span>{props.userStatus}</span>
        <span>{props.city}</span>
        <span>{props.country}</span>
      </div>
    </div>
  )
}

export default User
