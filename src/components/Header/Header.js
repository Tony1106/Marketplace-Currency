import React, { Component } from 'react'
import NavBar from './NavBar'
import {connect} from 'react-redux'
import * as A from '../../redux/user/Action'
class Header extends Component {
    handleLogout= ()=> {
        this.props.logOut()
    }
  render() {
      console.log(this.props);
      
    return (
        <div>
            <NavBar logOut={this.handleLogout} isLoggedIn={this.props.isLoggedIn}/>
        </div>
        

    )
  }
}
export default connect(
    state => {
        return {isLoggedIn: state.user.isLoggedIn}
    },
    {logOut: A.logOut.request}
    )(Header)