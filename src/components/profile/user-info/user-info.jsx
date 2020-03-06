import React from 'react'
import classes from './user-info.module.css'
import Loader from '../../ui/loader/loader'
import StatusHooks from './status/status-hooks'
import noAvatarImg from '../../../assets/images/no-avatar-img.jpg'
import UserContacts from './user-contacts/user-contacts'

const UserInfo = (props) => {
  if (!props.userInfo) {
    return <Loader/>
  }

  const onAvatarImgSelected = (evt) => {
    if (evt.target.files.length) {
      props.saveAvatarImg(evt.target.files[0])
    }
  }
  return (
    
    <div className={classes.UserInfo}>
      <div className={classes.UserInfoAvatar}>
        <img src={props.userInfo.photos.large || noAvatarImg} alt="avatar"/>
        {
          props.iserId ? null 
          : <>
              <input id="load avatar" name="load avatar" type="file" onChange={onAvatarImgSelected}/>
              <label for="load avatar">click to download</label>
            </>
        }
        
      </div>
      <div className={classes.UserContacts}>
        {
          props.iserId ? null 
          : <StatusHooks userId={props.userInfo.userId} userStatus={props.userStatus} updateStatus={props.updateStatus}/>
        }
        <UserContacts className={classes.UserContacts} userInfo={props.userInfo} updateUserContacts={props.updateUserContacts}/>
      </div>
    </div>
  )
}

export default UserInfo
