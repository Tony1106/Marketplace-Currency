import React, { Component } from 'react'
import NavBar from './NavBar'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as A from '../../redux/user/Action'
class Header extends Component {
    handleLogout= ()=> {
        this.props.logOut()
    }
  render() {
      console.log(this.props, 'props header');
      
    return (
        <div>
            <NavBar logOut={this.handleLogout} isLoggedIn={this.props.userProfile.isLoggedIn} userProfile={this.props.userProfile.userProfile} location={this.props.location.pathname}/>
        </div>
        

    )
  }
}
export default withRouter(connect(
    state => {
        return {userProfile: state.user}
    },
    {logOut: A.logOut.request}
    )(Header))