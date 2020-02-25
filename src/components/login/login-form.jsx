import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../ui/form-controls/form-controls'
import { required, maxLengthCreator } from '../../utils/validators'

const maxLength  = maxLengthCreator(16)

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Input} validate={[required, maxLength]} placeholder={'Login'} name={'Login'}/>
        </div>
        <div>
          <Field component={Input} validate={[required, maxLength]} placeholder={'Password'} name={'Password'}/>
        </div>
        <div>
          <Field component='input' type={'checkbox'} name={'Remember me'}/>Remember me
        </div>
        <button>Login</button>
      </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm