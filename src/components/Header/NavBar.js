import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import history from "../../History/History";
import { Link } from "react-router-dom";
export default class NavBar extends React.Component {
  state = {
    isOpen: false
  };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleSignIn(e) {
    e.preventDefault();
    history.push("./signin");
  }
  handleRegister(e) {
    e.preventDefault();
    history.push("./signup");
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Logo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
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

              <Button className="loginButton" onClick={this.handleSignIn}>
                Login
              </Button>
              <Button className="registerButton" onClick={this.handleRegister}>
                Register
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
