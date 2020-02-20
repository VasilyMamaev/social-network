import React, { Component } from 'react'
import Header from './header'
import { connect } from 'react-redux'
import { getAuthUserDataTC } from '../../redux/auth-reducer'

export class HeaderContainer extends Component {

  componentDidMount () {
    this.props.getAuthUserData()
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

export default connect(mapStateToProps, {getAuthUserData: getAuthUserDataTC}) (HeaderContainer)
