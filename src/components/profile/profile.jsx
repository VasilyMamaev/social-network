import React from 'react'
import classes from './profile.module.css'
import UserInfo from './user-info/user-info'

const Profile = (props) => {

  let state = props.state.profile

  let userPosts = state.userPosts.map((post) => {
  return <div className={classes.userPosts}>{ post }</div>
  })

  let newPost = React.createRef()
  let addPost = props.addPost
  let updatePost = props.updatePostText

  let newPostHandler = () => {
    let text = newPost.current.value
    addPost(text)
  }

  let textChangeHandler = () => {
    let text = newPost.current.value
    updatePost(text)
  }

  return (
    <body className={classes.Profile}>
      <div>
        <UserInfo state={state.userInfo} />
      </div>
      <div>
        <input type="text"
          value={state.newPostText}
          placeholder="What's new?"
          ref={newPost}
          onChange={textChangeHandler}
        ></input>
        <button onClick={newPostHandler}>send</button>
      </div>
      <div>
        { userPosts }
      </div>
    </body>
  )
}

export default Profile
