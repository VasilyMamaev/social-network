import React from 'react'
import classes from './user-info.module.css'

const UserInfo = (props) => {
  return (
    <div className={classes.UserInfo}>
      <div>
        <img src={props.state.avatar} alt="avatar"/>
        <span>edit</span>
      </div>
      <div>
       <strong>birtih day<span>{props.state.birth}</span></strong>
       <strong>city<span>{props.state.city}</span></strong>
       <strong>education<span>{props.state.education}</span></strong>
       <strong>WEB-site<span>{props.state.web_site}</span></strong>
      </div>
    </div>
  )
}

export default UserInfo
