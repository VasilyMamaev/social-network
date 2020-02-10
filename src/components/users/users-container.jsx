import { connect } from "react-redux";
import Users from "./users";
import { showMoreActionCreator, followActionCreator } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
 return {
  users: state.users.users
 }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addUsersHandler: (users) => {
      dispatch(showMoreActionCreator(users))
    },
    followHandler: (userId, follow) => {
      dispatch(followActionCreator(userId, follow))
    }
  }
 }

let UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer