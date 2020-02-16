import React from 'react'
import classes from './header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <img src='https://png.pngtree.com/templates_detail/20180830/company-logo-template-png_30498.jpg' alt="logo"/>
      { props.isAuth ? <span>{props.login}</span> : <NavLink to={'/login'}>login</NavLink>}
    </header>
  )
}

export default Header
