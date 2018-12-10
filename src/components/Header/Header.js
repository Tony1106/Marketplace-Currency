import React, { Component } from 'react'
import NavBar from './NavBar'
import {connect} from 'react-redux'

class Header extends Component {
  render() {
      console.log(this.props);
      
    return (
        <div>
            <NavBar isLoggedIn={this.props.isLoggedIn}/>
        </div>
        

    )
  }
}
export default connect(
    state => {
        return {isLoggedIn: state.user.isLoggedIn}
    }
    )(Header)