import React from 'react'

function User(props) {
  return (
    <div>
      <div>
        <img src={props.avatar} alt="avatar"/>
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
