import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  
} from "reactstrap";
import {Image} from 'semantic-ui-react'
import AvatarUser from "./Avatar";
import history from "../../History/History";
import { Link } from "react-router-dom";
export default class NavBar extends React.Component {
  state = {
    isOpen: false,
    dropdownOpen: false,
  };


  handleSignIn(e) {
    e.preventDefault();
    history.push("./signin");
  }
 
 
  handleRegister(e) {
    e.preventDefault();
    history.push("./signup");
  }
  toggleProfile() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const isLogginedIn  = this.props.isLoggedIn;
    const { location } = this.props;
    console.log(location, 'location');
    const homeClassActive = location === '/marketplace'? true: false;
    const aboutClassActive = location === '/About'? true: false;
    const contactClassActive = location === '/Contact'? true: false;
    const createAdsClassActive = location === '/dashboard'? true: false;


    let userNavBar;
    if (isLogginedIn) {
      userNavBar = (
        <>
        <NavItem>
              <NavLink active= {createAdsClassActive} tag={Link} to="/dashboard">
                Create Ads
              </NavLink>
            </NavItem>
        <div className="userProfile">
          <ButtonDropdown
            isOpen={this.state.dropdownOpen}
            toggle={this.toggleProfile.bind(this)}
          >
            <DropdownToggle caret>Profile</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Profile</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Setting</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.props.logOut}>Login Out</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
        </>
      );
    } else {
      userNavBar = (
        <>
        
          <Button className="loginButton" onClick={this.handleSignIn}>
            Login
          </Button>
          <Button className="registerButton" onClick={this.handleRegister}>
            Register
          </Button>
        </>
      );
    }

    return (
      <Navbar color="light" light expand="md" id="navbar">
        <NavbarBrand href="/" className="navbarBrand">
        <Image avatar src={require('../../asset/logo.png')}/> 
        </NavbarBrand>
        <NavbarToggler
          onClick={this.toggleMenu.bind(this)}
          className="toogleButton"
        />
        {isLogginedIn ? <AvatarUser avatar = {this.props.avatar}/> : null}
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto " navbar tabs>
            <NavItem>
              <NavLink  active={homeClassActive} tag={Link} to="/marketplace">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active = {aboutClassActive} tag={Link} to="/About">
                About
              </NavLink>
            </NavItem>
          

            <NavItem>
              <NavLink active={contactClassActive} tag={Link} to="/Contact">
                Contact
              </NavLink>
            </NavItem>
            
            {userNavBar}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
