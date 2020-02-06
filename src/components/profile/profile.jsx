import React from 'react'
import classes from './profile.module.css'
import UserInfo from './user-info/user-info'

const Profile = (props) => {

  let userPosts = props.state.userPosts.map((post) => {
  return <div className={classes.userPosts}>{ post }</div>
  })

  let newPost = React.createRef()
  let addPost = props.addPost
  let newPostHandler = () => {
    let text = newPost.current.value
    addPost(text)
    newPost.current.value = ''
  }

  return (
    <body className={classes.Profile}>
      <div>
        <UserInfo state={props.state.userInfo} />
      </div>
      <div>
        <input type="text" placeholder="What's new?" ref={newPost}></input>
        <button onClick={newPostHandler}>send</button>
      </div>
      <div>
        { userPosts }
      </div>
    </body>
  )
}

export default Profile
