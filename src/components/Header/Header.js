import React, { Component } from 'react'
import NavBar from './NavBar'

export default class Header extends Component {
  render() {
      console.log(this.props);
      
    return (
        <div>
            <NavBar/>
        </div>
        

    )
  }
}
