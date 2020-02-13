import { connect } from "react-redux";
import Users from "./users";
import { showMoreActionCreator, followActionCreator, changePageActionCreator, changePageUsersActionCreator } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
 return {
  users: state.users.users,
  totalCount: state.users.totalCount,
  usersAtPageCount: state.users.usersAtPageCount,
  currentPage: state.users.currentPage
 }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addUsersHandler: (users, totalCount) => {
      dispatch(showMoreActionCreator(users, totalCount))
    },
    followHandler: (userId, follow) => {
      dispatch(followActionCreator(userId, follow))
    },
    changePageHandler: (page) => {
      dispatch(changePageActionCreator(page))
    },
    changePageUsersHandler: (users) => {
      dispatch(changePageUsersActionCreator(users))
    }
  }
 }

let UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer