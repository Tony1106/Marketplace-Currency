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
  DropdownToggle
} from "reactstrap";
import AvatarUser from "./Avatar";
import history from "../../History/History";
import { Link } from "react-router-dom";
export default class NavBar extends React.Component {
  state = {
    isOpen: false,
    dropdownOpen: false
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
    console.log(this.props, "props");
    const { isLogginedIn } = this.props;
    let userNavBar;
    if (!isLogginedIn) {
      userNavBar = (
        <div className= 'userProfile'>
          
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
              <DropdownItem>Login Out</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
      );
    } else {
      userNavBar = (
        <div>
          <Button className="loginButton" onClick={this.handleSignIn}>
            Login
          </Button>
          <Button className="registerButton" onClick={this.handleRegister}>
            Register
          </Button>
        </div>
      );
    }

    return (
    
        <Navbar color="light" light expand="md" id="navbar">
          <NavbarBrand href="/" className="navbarBrand">Logo</NavbarBrand>
          <NavbarToggler onClick={this.toggleMenu.bind(this)} className='toogleButton'/>
          {!isLogginedIn?<AvatarUser/>:null}
          <Collapse isOpen={this.state.isOpen} navbar >
            <Nav className="ml-auto " navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/About">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/BuyandSell">
                  Buy & Sell
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} to="/Contact">
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
