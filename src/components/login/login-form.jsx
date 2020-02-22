import React from 'react'
import { reduxForm, Field } from 'redux-form'

const LoginForm = (props) => {
  debugger
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={'input'} placeholder={'Login'} name={'Login'}/>
        </div>
        <div>
          <Field component={'input'} placeholder={'Password'} name={'Password'}/>
        </div>
        <div>
        <Field component={'input'} type={'checkbox'} name={'Remember me'}/>>Remember me
        </div>
        <button>Login</button>
      </form>
  )
}

const LoginReduxForm = reduxForm({form: 'contact'})(LoginForm)

export default LoginReduxForm