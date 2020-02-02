import React from 'react'
import classes from './profile.module.css'
import UserInfo from './user-info/user-info'

const Profile = (props) => {

  let userPosts = props.state.userPosts.map((post) => {
  return <div className={classes.userPosts}>{ post }</div>
  })

  return (
    <body className={classes.Profile}>
      <div>
        <UserInfo state={props.state.userInfo} />
      </div>
      <div>
        <input type="text" placeholder="What's new?"></input>
        <button>send</button>
      </div>
      <div>
        { userPosts }
      </div>
    </body>
  )
}

export default Profile
