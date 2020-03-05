import React from 'react'
import classes from './user-info.module.css'
import Loader from '../../ui/loader/loader'
//import Status from './status/status'
import StatusHooks from './status/status-hooks'
import noAvatarImg from '../../../assets/images/no-avatar-img.jpg'

const UserInfo = (props) => {
  if (!props.userInfo) {
    return <Loader/>
  }

  const onAvatarImgSelected = (evt) => {
    if (evt.target.files.length) {
      props.saveAvatarImg(evt.target.files[0])
    }
  }
  console.log(props)
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
      <div className={classes.UserInfoText}>
        {
          props.iserId ? null 
          : <StatusHooks userId={props.userInfo.userId} userStatus={props.userStatus} updateStatus={props.updateStatus}/>
        }
        <strong>About me<span>{props.userInfo.aboutMe}</span></strong>
        <div className={classes.userContacts}>
          contacts<tr/>
          <strong>facebook<span>{props.userInfo.contacts.facebook}</span></strong>
          <strong>website<span>{props.userInfo.contacts.website}</span></strong>
          <strong>vk<span>{props.userInfo.contacts.vk}</span></strong>
          <strong>twitter<span>{props.userInfo.contacts.twitter}</span></strong>
          <strong>instagram<span>{props.userInfo.contacts.instagram}</span></strong>
          <strong>youtube<span>{props.userInfo.contacts.youtube}</span></strong>
          <strong>github<span>{props.userInfo.contacts.github}</span></strong>
          <strong>mainLink<span>{props.userInfo.contacts.mainLink}</span></strong>
        </div>
        <strong>lookingForAJob<span>??</span></strong>
        <strong>lookingForAJobDescription<span>{props.userInfo.lookingForAJobDescription}</span></strong>
        <strong>fullName<span>{props.userInfo.fullName}</span></strong>
      </div>
    </div>
  )
}

export default UserInfo
