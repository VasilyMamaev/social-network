import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Textarea } from '../../ui/form-controls/form-controls'
import { maxLengthCreator } from '../../../utils/validators'

const maxLength = maxLengthCreator(120)

const UserPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='newPostText' validate={maxLength} component={Textarea} placeholder='Post text...'/>
      <button>Post</button>
    </form>
  )
}

let UserPostsReduxForm = reduxForm({form: 'newUserPost'})(UserPostsForm)

export default UserPostsReduxForm
