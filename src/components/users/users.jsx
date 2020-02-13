import React, { Component } from 'react'
import User from './user/user'
import * as axios from 'axios'
import noAvatarImg from '../../assets/images/no-avatar-img.jpg'
import classes from './users.module.css'

class Users extends Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersAtPageCount}&page=${this.props.currentPage}`).then((response) => {
        this.props.addUsersHandler(response.data.items, response.data.totalCount)
      })
    }
  }

  onPageClick = (page) => {
    this.props.changePageHandler(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersAtPageCount}&page=${this.props.currentPage}`).then((response) => {
      this.props.changePageUsersHandler(response.data.items)
    })
  }

  render () {

  let pagesCount = Math.ceil(this.props.totalCount / this.props.usersAtPageCount)

  let pages = []

  for (let i = 1; i <= pagesCount; i++ ) {
    pages.push(i)
  }


  return (
    <div>
      <div>
        { pages.map((page) => {
          return <span 
            key={page}
            className={page === this.props.currentPage ? classes.selectedPage : null}
            onClick={() => {this.onPageClick(page)}}
          >{page}</span>
        }) }
      </div>
      <div>
        { this.props.users.map(user => <User 
    key={user.id}
    follow={() => this.props.followHandler(user.id, user.fllowed)}
    avatar={(user.photos.small !== null) ? user.photos.small : noAvatarImg }
    fllowed={user.fllowed}
    name={user.name}
    userStatus={user.status}
    city={'user.location.city'}
    country={'user.location.country'} 
  />) }
      </div>
      <div>
        <button onClick={() => this.props.addUsersHandler()}>Show more</button>
      </div>
    </div>
  )
}
}

export default Users
