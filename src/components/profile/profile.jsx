import React from 'react'
import classes from './profile.module.css'
import UserInfo from './user-info/user-info'
import UserPostsReduxForm from './user-posts/user-posts-form'

const Profile = React.memo((props) => {
  let Posts = props.userPosts.map((post, i) => {
  return <div key={i} className={classes.userPosts}>{ post.message }</div>
  }).reverse()

  const postHandler = (value) => {
    props.newPostHandler(value)
  }

  return (
    <body className={classes.Profile}>
      <div>
        <UserInfo 
          userInfo={props.userInfo}
          userStatus={props.userStatus}
          updateStatus={props.updateStatus}
          iserId={props.iserId}
          saveAvatarImg={props.saveAvatarImg}
          updateUserContacts={props.updateUserContacts}
         />
      </div>
      <div>
        { props.iserId ? null : <UserPostsReduxForm onSubmit={postHandler}/> }
      </div>
      <div>
        { Posts }
      </div>
    </body>
  )
})

export default Profile
