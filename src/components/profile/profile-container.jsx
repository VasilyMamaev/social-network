import Profile from './profile'
import { updatePostTextActionCreator, addPostActionCreator, setProfileActionCreator } from '../../redux/profile-reducer'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (userId === undefined) {
      userId = '2'
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
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

let WithUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps) (WithUrlProfileContainer)
