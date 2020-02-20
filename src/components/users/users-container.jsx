import React, { Component } from 'react'
import { connect } from "react-redux";
import Users from "./users";
import { getUsersTC, toggleFollowTC } from "../../redux/users-reducer";

class UsersContainer extends Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
        this.props.getUsers(this.props.usersAtPageCount, this.props.currentPage)
    }
  }

  onPageClick = (page) => {
    this.props.getUsers(this.props.usersAtPageCount, page)
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
      followInProgress={this.props.followInProgress}
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
  isFetching: state.users.isFetching,
  followInProgress: state.users.followInProgress
 }
}


export default connect(mapStateToProps, {
  followHandler: toggleFollowTC,
  getUsers: getUsersTC
}) (UsersContainer)
