import React, { Component } from "react";
import OutlineButton from '../../components/DropDown/OutlineButton'
import styles from './Filter.module.css'
import {connect} from 'react-redux'
import * as A from '../../redux/ItemData/Action'
class Filter extends Component {

  state = {
    type: '',
    currency: '',
    location: ''
  }

  handleChooseType= (value)=>{
    console.log(value, 'value');
    const {currency, location} = this.state;
    this.setState({type: value})
    this.props.getDataWithFilter({
      type: value,
      currency,
      location
    })
      }
      handleChooseCurrency= (value)=>{
    const {type, location} = this.state;
    this.setState({currency: value})
    this.props.getDataWithFilter({
      currency: value,
      location,
      type

    })
      }
      handleChooseLocation= (value)=>{
    const {type, currency} = this.state;
    this.setState({location: value})
    this.props.getDataWithFilter({
      location: value,
      currency,
      type

    })
      }
  render() {
    
    
    return (
      <div className={styles.optionContainer}>
        <h3 className={styles.heading}>Choose your options</h3>
        <div className={styles.formContainer}>
          <div className={styles.wrapButton}>
            <h5>Select Your Type</h5>
            <OutlineButton options={["Buy", "Sell"]} handleChoose= {(value)=> this.handleChooseType(value)}/>
          </div>
          <div className={styles.wrapButton}>
            <h5>Select Your Currency</h5>
            <OutlineButton options={["USD", "AUD", "VND"]} handleChoose= {(value)=> this.handleChooseCurrency(value)}/>
          </div>
          <div className={styles.wrapButton}>
            <h5>Select Your Location</h5>
            <OutlineButton options={["Victoria", "Sydney", "HCM"]} handleChoose= {(value)=> this.handleChooseLocation(value)}/>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  {getDataWithFilter: A.getItemDataFromFirebaseWithFilter.request}
)(Filter)