import Profile from './profile'
import { addPostActionCreator, getProfileTC, getStatusTC } from '../../redux/profile-reducer'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
//import withUserAuth from '../../hoc/with-user-auth'
import { compose } from 'redux'

class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (userId === undefined) {
      userId = '2'
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  render () {
    return (
      <Profile
        userInfo = {this.props.userInfo}
        userPosts = {this.props.userPosts}
        newPostText = {this.props.newPostText}
        textChangeHandler = {this.props.textChangeHandler}
        newPostHandler = {this.props.newPostHandler}
        userStatus = {this.props.userStatus}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    userPosts: state.profile.userPosts,
    userInfo: state.profile.userInfo,
    newPostText: state.profile.newPostText,
    userStatus: state.profile.userStatus
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    newPostHandler: (textPost) => {
      dispatch(addPostActionCreator(textPost))
    },
    getProfile: (userInfo) => {
      dispatch(getProfileTC(userInfo))
    },
    getStatus: (userId) => {
      dispatch(getStatusTC(userId))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
 // withUserAuth
) (ProfileContainer)
