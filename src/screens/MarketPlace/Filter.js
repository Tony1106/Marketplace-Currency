import React, { Component } from "react";
import OutlineButton from '../../components/DropDown/OutlineButton'
import styles from './Filter.module.css'
export default class Filter extends Component {
  render() {
    return (
      <div className={styles.optionContainer}>
        <h3 className={styles.heading}>Choose your options</h3>
        <div className={styles.formContainer}>
          <div className={styles.wrapButton}>
            <h5>Select Your Type</h5>
            <OutlineButton options={["Buy", "Sell"]} />
          </div>
          <div className={styles.wrapButton}>
            <h5>Select Your Currency</h5>
            <OutlineButton options={["USD", "AUD", "VND"]} />
          </div>
          <div className={styles.wrapButton}>
            <h5>Select Your Location</h5>
            <OutlineButton options={["Victoria", "Sydney", "HCM"]} />
          </div>
        </div>
      </div>
    );
  }
}
