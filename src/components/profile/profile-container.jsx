import Profile from './profile'
import { updatePostTextActionCreator, addPostActionCreator } from '../../redux/profile-reducer'
import { connect } from 'react-redux'

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
    }
  }
}

let ProfileContainer = connect(mapStateToProps, mapDispatchToProps) (Profile)

export default ProfileContainer
