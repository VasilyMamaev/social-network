import React, { Component } from 'react'
import { connect } from "react-redux";
import Users from "./users";
import { showMoreActionCreator, followActionCreator, changePageActionCreator, changePageUsersActionCreator, isFetchingTogglerActionCreator } from "../../redux/users-reducer";
import { usersAPI } from '../../api/api';

class UsersContainer extends Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.changeLoadingViewHandler(true)
      usersAPI.getUsers(this.props.usersAtPageCount, this.props.currentPage).then((data) => {
        this.props.addUsersHandler(data.items, data.totalCount)
        this.props.changeLoadingViewHandler(false)
      })
    }
  }

  onPageClick = (page) => {
    this.props.changeLoadingViewHandler(true)
    this.props.changePageHandler(page)
    usersAPI.getUsers(this.props.usersAtPageCount, this.props.currentPage).then((data) => {
      this.props.changePageUsersHandler(data.items)
      this.props.changeLoadingViewHandler(false)
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
      followHandler={this.props.followHandler}
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


export default connect(mapStateToProps, {
  addUsersHandler: showMoreActionCreator,
  followHandler: followActionCreator,
  changePageHandler: changePageActionCreator,
  changePageUsersHandler: changePageUsersActionCreator,
  changeLoadingViewHandler: isFetchingTogglerActionCreator
}) (UsersContainer)
