import React from 'react'
import User from './user/user'

function Users(props) {

  return (
    <div>
      <div>
        { props.users.map(user => <User 
    key={user.id}
    follow={() => props.followHandler(user.id, user.fllowed)}
    avatar={user.avatar}
    fllowed={user.fllowed}
    name={user.firstName}
    userStatus={user.userStatus}
    city={user.location.city}
    country={user.location.country} 
  />) }
      </div>
      <div>
        <button onClick={() => props.addUsersHandler()}>Show more</button>
      </div>
    </div>
  )
}

export default Users
