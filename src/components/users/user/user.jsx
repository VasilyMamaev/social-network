import React from 'react'
import classes from './user.module.css'
import { NavLink } from 'react-router-dom'

function User(props) {
  return (
    <div className={classes.User}>
      <div>
        <NavLink to={'/Profile/' + props.id}>
          <img src={props.avatar} alt="avatar"/>
        </NavLink>
        <button onClick={props.follow}>{props.fllowed}</button>
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
