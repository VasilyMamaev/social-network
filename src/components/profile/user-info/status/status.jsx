import React, { Component } from 'react'

export class Status extends Component {

  state = {
    statusOnEdit: false,
    userStatus: this.props.userStatus
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userStatus !== this.props.userStatus) {
      this.setState({
        userStatus: this.props.userStatus
      })
    }
  }

  statusOnEditToggler() {
    this.setState({
      statusOnEdit: !this.state.statusOnEdit
    })
  }

  onChangeStatus(evt) {
    this.setState({
      userStatus: evt.target.value
    })
  }

  render() {
    
    return (
      <div>
        {
          this.state.statusOnEdit 
          ? <input 
              autoFocus={true} 
              onBlur={this.statusOnEditToggler.bind(this)} 
              value={this.state.userStatus} 
              type='text'
              onChange={(evt) => {this.onChangeStatus(evt)}}
            />
          : <span onDoubleClick={this.statusOnEditToggler.bind(this)}>{this.props.userStatus ? this.props.userStatus : 'enter status...'}</span>
        }
      </div>
    )
  }
}

export default Status
