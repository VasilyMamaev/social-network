import Profile from './profile'
import { updatePostTextActionCreator, addPostActionCreator, setProfileActionCreator } from '../../redux/profile-reducer'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import axios from 'axios'

class ProfileContainer extends Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then((response) => {
      this.props.setProfile(response.data)    
    })
  }

  render () {
    return (
      <Profile
        userInfo = {this.props.userInfo}
        userPosts = {this.props.userPosts}
        newPostText = {this.props.newPostText}
        textChangeHandler = {this.props.textChangeHandler}
        newPostHandler = {this.props.newPostHandler}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    userPosts: state.profile.userPosts,
    userInfo: state.profile.userInfo,
    newPostText: state.profile.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    textChangeHandler: (evt) => {
      dispatch(updatePostTextActionCreator(evt.target.value))
    },
    newPostHandler: () => {
      dispatch(addPostActionCreator())
    },
    setProfile: (userInfo) => {
      dispatch(setProfileActionCreator(userInfo))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (ProfileContainer)
