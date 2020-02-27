import React from 'react'
import LoginForm from './login-form'
import { connect } from 'react-redux'
import { loginTC } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

function Login(props) {

  let onSubmit = (formData) => {
    props.loginTC(formData.login, formData.password, formData.rememberMe)
  } 

  if (props.isAuth) {
    return <Redirect to='/profile'/>
  } 

  return <LoginForm onSubmit={onSubmit}/>
}


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {loginTC} ) (Login)
