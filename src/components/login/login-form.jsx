import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../ui/form-controls/form-controls'
import { required, maxLengthCreator } from '../../utils/validators'
import classes from './login-form.module.css'

const maxLength  = maxLengthCreator(16)

const LoginForm = (props) => {
  return (
    <div className={classes.Login}>
      <div className={classes.flamingo}>
      </div>
      <div className={classes.LoginForm}>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Input} validate={[required, maxLength]} placeholder='email' name='login'/>
        </div>
        <div>
          <Field component={Input} validate={[required, maxLength]} placeholder='Password' name='password' type='Password'/>
        </div>
        <div>
          <Field component={Input} type='checkbox' name='rememberMe'/>Remember me
        </div>
        { props.error && <span>{props.error}</span> }
        <button>Login</button>
      </form>
      </div>
    </div>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm