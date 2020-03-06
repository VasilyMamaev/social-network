import React from 'react'
import classes from './user-contacts-form.module.css'
import { reduxForm, Field } from 'redux-form'
import { Input, Textarea } from '../../../../ui/form-controls/form-controls'
import { maxLengthCreator } from '../../../../../utils/validators'

const UserContactsForm = (props) => {
  
  const maxLength = maxLengthCreator(140)

  return (
    <form onSubmit={props.handleSubmit}>
      <button>submit</button>
      <div>About me<Field component={Input} validate={[maxLength]} placeholder='About me' name='aboutMe'/></div>
      <div className={classes.contacts}>
        contacts<tr/>
        <div>facebook<Field component={Input} validate={maxLength} placeholder='facebook' name='contacts.facebook'/></div>
        <div>website<Field component={Input} validate={[maxLength]} placeholder='website' name='contacts.website'/></div>
        <div>vk<Field component={Input} validate={[maxLength]} placeholder='vk' name='contacts.vk'/></div>
        <div>twitter<Field component={Input} validate={[maxLength]} placeholder='twitter' name='contacts.twitter'/></div>
        <div>instagram<Field component={Input} validate={[maxLength]} placeholder='instagram' name='contacts.instagram'/></div>
        <div>youtube<Field component={Input} validate={[maxLength]} placeholder='youtube' name='contacts.youtube'/></div>
        <div>github<Field component={Input} validate={[maxLength]} placeholder='github' name='contacts.github'/></div>
        <div>mainLink<Field component={Input} validate={[maxLength]} placeholder='mainLink' name='contacts.mainLink'/></div>
      </div>
      <div>lookingForAJob<Field component={Input} type='checkbox' name='lookingForAJob'/></div>
      <div>lookingForAJobDescription<Field component={Textarea} validate={[maxLength]} placeholder='lookingForAJobDescription' name='lookingForAJobDescription'/></div>
      <div>fullName<Field component={Input} validate={[maxLength]} placeholder='fullName' name='fullName'/></div>
    </form>
  )
}

const UserContactsReduxForm = reduxForm({form: 'UserContacts'})(UserContactsForm)

export default UserContactsReduxForm
