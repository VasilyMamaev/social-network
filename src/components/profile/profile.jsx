import React from 'react'
import classes from './profile.module.css'
import UserInfo from './user-info/user-info'

const Profile = (props) => {
  let Posts = props.userPosts.map((post) => {
  return <div className={classes.userPosts}>{ post }</div>
  })

  return (
    <body className={classes.Profile}>
      <div>
        <UserInfo state={props.userInfo} />
      </div>
      <div>
        <input type="text"
          value={props.newPostText}
          placeholder="What's new?"
          onChange={props.textChangeHandler}
        ></input>
        <button onClick={props.newPostHandler}>send</button>
      </div>
      <div>
        { Posts }
      </div>
    </body>
  )
}

export default Profile
