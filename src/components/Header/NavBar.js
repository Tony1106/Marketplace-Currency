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
import styles from './NavBar.module.css'
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
    const homeClassActive = location === '/home'? true: false;
    const marketPlaceClassActive = location === '/marketplace'? true: false;
    const aboutClassActive = location === '/About'? true: false;
    const contactClassActive = location === '/Contact'? true: false;
    const createAdsClassActive = location === '/dashboard'? true: false;


    let userNavBar;
    if (isLogginedIn) {
      userNavBar = (
        <>
        <NavItem>
              <NavLink className={`${styles.navItem} ${createAdsClassActive?styles.active:''}`} tag={Link} to="/dashboard">
                Dashboard
              </NavLink>
            </NavItem>
        {/* <div className="userProfile">
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
        </div> */}
    
            <NavItem>
              <NavLink className={styles.navItem}  tag={Link} to="/dashboard" onClick={this.props.logOut}>
                SignOut
              </NavLink>
            </NavItem>
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
      <Navbar color="dark" dark expand="md" id="navbar">
        <NavbarBrand href="/" className="navbarBrand">
        <Image avatar src={require('../../asset/logo.png')}/> 
        </NavbarBrand>
        <NavbarToggler
          onClick={this.toggleMenu.bind(this)}
          className="toogleButton"
        />
        {isLogginedIn ? <AvatarUser avatar = {this.props.avatar}/> : null}
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto " navbar pills>
          {!isLogginedIn ? <NavItem>
              <NavLink className={`${styles.navItem} ${homeClassActive?styles.active:''}`}  tag={Link} to="/home">
                Home
              </NavLink>
            </NavItem> : null}
            
            <NavItem>
              <NavLink className={`${styles.navItem} ${marketPlaceClassActive?styles.active:''}`} tag={Link} to="/marketplace">
                MarketPlace
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={`${styles.navItem} ${aboutClassActive?styles.active:''}`} tag={Link} to="/About">
                About
              </NavLink>
            </NavItem>
          

            <NavItem>
              <NavLink className={`${styles.navItem} ${contactClassActive?styles.active:''}`} tag={Link} to="/Contact">
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
