import Profile from './profile'
import { updatePostTextActionCreator, addPostActionCreator, getProfileTC } from '../../redux/profile-reducer'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (userId === undefined) {
      userId = '2'
    }
    this.props.getProfile(userId)
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
    getProfile: (userInfo) => {
      dispatch(getProfileTC(userInfo))
    }
  }
}

let WithUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps) (WithUrlProfileContainer)
