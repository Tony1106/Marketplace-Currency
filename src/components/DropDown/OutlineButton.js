import React from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import styles from './index.module.css'
export default class OutlineButton extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      dropdownOpen: false,
      name: 'To be select...'
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  handleClick(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (

      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle size = 'md' color='#58b7e6' caret className={styles.button} > {this.state.name}</DropdownToggle>
        <DropdownMenu className={styles.drowDownButton} styles={{}}>
          {this.props.options.map((option, i) => (
            <DropdownItem key={i} onClick={this.handleClick} value={option}>
              {option}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
 