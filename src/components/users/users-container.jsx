import React, { Component } from 'react'
import { connect } from "react-redux";
import Users from "./users";
import { showMoreActionCreator, followActionCreator, changePageActionCreator, changePageUsersActionCreator, isFetchingTogglerActionCreator } from "../../redux/users-reducer";
import axios from 'axios';

class UsersContainer extends Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.changeLoadingViewHandler()
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersAtPageCount}&page=${this.props.currentPage}`).then((response) => {
        this.props.addUsersHandler(response.data.items, response.data.totalCount)
        this.props.changeLoadingViewHandler()
      })
    }
  }

  onPageClick = (page) => {
    this.props.changeLoadingViewHandler()
    this.props.changePageHandler(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersAtPageCount}&page=${this.props.currentPage}`).then((response) => {
      this.props.changePageUsersHandler(response.data.items)
      this.props.changeLoadingViewHandler()
    })
  }

  render () {
   return(
    <Users
      users={this.props.users}
      totalCount={this.props.totalCount}
      usersAtPageCount={this.props.usersAtPageCount}
      currentPage={this.props.currentPage}
      onPageClick={this.onPageClick}
      isFetching={this.props.isFetching}
    />
   ) 
  }
}

let mapStateToProps = (state) => {
 return {
  users: state.users.users,
  totalCount: state.users.totalCount,
  usersAtPageCount: state.users.usersAtPageCount,
  currentPage: state.users.currentPage,
  isFetching: state.users.isFetching
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
    },
    changeLoadingViewHandler: () => {
      dispatch(isFetchingTogglerActionCreator())
    }
  }
 }

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer)
