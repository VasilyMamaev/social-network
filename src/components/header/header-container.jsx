import React, { Component } from 'react'
import Header from './header'
import { connect } from 'react-redux'
import { setUserDataAC } from '../../redux/auth-reducer'
import { usersAPI } from '../../api/api'

export class HeaderContainer extends Component {

  componentDidMount () {
    usersAPI.authMe().then((response) => {
      if (response.resultCode === 0) {
        let {id,email,login} = response.data
        this.props.setAuthUserData(id, email, login)
      }
    })
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {setAuthUserData: setUserDataAC}) (HeaderContainer)
