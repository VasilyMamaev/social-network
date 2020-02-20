import React from 'react'
import noAvatarImg from '../../assets/images/no-avatar-img.jpg'
import classes from './users.module.css'
import User from './user/user'
import Loader from '../ui/loader/loader'


function Users(props) {

  let pagesCount = Math.ceil(props.totalCount / props.usersAtPageCount)
  let pages = []

  for (let i = 1; i <= pagesCount; i++ ) {
    pages.push(i)
  }

  return (
    <div>
      { props.isFetching ? <Loader/> : <>
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
    id={user.id}
    followHandler={props.followHandler}
    avatar={(user.photos.small !== null) ? user.photos.small : noAvatarImg }
    followed={user.followed}
    followInProgress={props.followInProgress}
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
