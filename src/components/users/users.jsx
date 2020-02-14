import React from 'react'
import noAvatarImg from '../../assets/images/no-avatar-img.jpg'
import classes from './users.module.css'
import User from './user/user'
import loadingImg from '../../assets/ainmation/loading-cube.svg'

function Users(props) {

  let pagesCount = Math.ceil(props.totalCount / props.usersAtPageCount)

  let pages = []

  for (let i = 1; i <= pagesCount; i++ ) {
    pages.push(i)
  }

  return (
    <div>
      { props.isFetching ? <img src={loadingImg} alt='loading'/> : <>
      <div>
        { pages.map((page) => {
          return <span 
            key={page}
            className={page === props.currentPage ? classes.selectedPage : null}
            onClick={() => {props.onPageClick(page)}}
          >{page}</span>
        }) }
      </div>
      <div>
        { props.users.map(user => <User 
    key={user.id}
    follow={() => props.followHandler(user.id, user.fllowed)}
    avatar={(user.photos.small !== null) ? user.photos.small : noAvatarImg }
    fllowed={user.fllowed}
    name={user.name}
    userStatus={user.status}
    city={'user.location.city'}
    country={'user.location.country'} 
  />) }
      </div>
      <div>
        <button onClick={() => props.addUsersHandler()}>Show more</button>
      </div>
</>}
    </div>
  )
}

export default Users
