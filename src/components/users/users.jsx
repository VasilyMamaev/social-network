import React, { Component } from 'react'
import User from './user/user'
import * as axios from 'axios'
import noAvatarImg from '../../assets/images/no-avatar-img.jpg'

class Users extends Component {

  constructor (props) {
    super(props)
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {this.props.addUsersHandler(response.data.items)})
    }

  }

  render () {
    console.log(this.props)
  return (
    <div>
      <div>
        { this.props.users.map(user => <User 
    key={user.id}
    follow={() => this.props.followHandler(user.id, user.fllowed)}
    avatar={(user.photos.small !== null) ? user.photos.small : noAvatarImg }
    fllowed={user.fllowed}
    name={user.name}
    userStatus={user.status}
    city={'user.location.city'}
    country={'user.location.country'} 
  />) }
      </div>
      <div>
        <button onClick={() => this.props.addUsersHandler()}>Show more</button>
      </div>
    </div>
  )
}
}

export default Users
