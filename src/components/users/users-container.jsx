import React, { Component } from 'react'
import { connect } from "react-redux";
import Users from "./users";
import { showMoreActionCreator, followActionCreator, changePageActionCreator, changePageUsersActionCreator, isFetchingTogglerActionCreator } from "../../redux/users-reducer";
import axios from 'axios';

class UsersContainer extends Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.changeLoadingViewHandler(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersAtPageCount}&page=${this.props.currentPage}`, {withCredentials: true}).then((response) => {
        this.props.addUsersHandler(response.data.items, response.data.totalCount)
        this.props.changeLoadingViewHandler(false)
      })
    }
  }

  onPageClick = (page) => {
    this.props.changeLoadingViewHandler(true)
    this.props.changePageHandler(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersAtPageCount}&page=${this.props.currentPage}`, {withCredentials: true}).then((response) => {
      this.props.changePageUsersHandler(response.data.items)
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
