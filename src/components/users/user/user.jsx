import React from 'react'
import classes from './user.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

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
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
              withCredentials: true,
              headers: {
                "API-KEY": 'e10dfbbe-068b-4a22-94ec-46ea74c34511'
              }
            })
            .then((response) => {
              if (response.data.resultCode === 0) {
                props.followHandler(props.id, props.followed) 
              }
          })
          }}>{props.followed ? 'followed' : 'unfollowed'}</button>
          :
          <button onClick={() => {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
              withCredentials: true,
              headers: {
                "API-KEY": 'e10dfbbe-068b-4a22-94ec-46ea74c34511'
              }
            })
            .then((response) => {
              if (response.data.resultCode === 0) {
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
