import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Form,
  Input,
  Label,
  FormGroup
} from "reactstrap";
import Sell from './Sell/Sell'
import BuyForm from '../../components/Form/BuyForm'
import SellForm from '../../components/Form/SellForm'
import style from "./style.module.css";
import {connect} from 'react-redux'
import * as A from '../../redux/money/Action'
class Dashboard extends Component {
  constructor(props){
    super(props)


  }
  state = {
    value: {},
    isBuy: true,
  };

  handleChangeBuyForm(values){
    values.userProfile = this.props.userProfile;
    this.props.handleDataFromBuyForm(values);
  }
  handleChangeSellForm(values){
    values.userProfile = this.props.userProfile;
    this.props.handleDataFromSellForm(values);
  }
  render() {
      console.log(this.props.userProfile, 'userprofile');
    console.log(this.props.match.params);
    const isBuy = this.state.isBuy;
    return (
      <Container>
        <div>
          <h3 className={style.title}>Welcome to Exchange Me</h3>
          <h5>Would you like to buy or sell?</h5>
          <div className={style["button-group"]}>
            <div className={`${style["button-sell"]}  ${style.button}`}>
              <button className={isBuy?style.active:null} onClick={()=> this.setState({isBuy: true})} >Buy</button>
            </div>
            <div className={`${style["button-buy"]}  ${style.button}`}>
              <button className={!isBuy?style.active:null}onClick={()=> this.setState({isBuy: false})}>Sell</button>
            </div>
          </div>
          <div className={style.detail}>
            {this.state.isBuy? <BuyForm onChange = {(values) => this.handleChangeBuyForm(values)}/> : <SellForm onChange={(values)=> this.handleChangeSellForm(values)}/>}
            </div>
        </div>
      </Container>
    );
  }
}

export default connect(
  (state) => ({userProfile: state.user.userProfile}),
  {handleDataFromBuyForm: A.createAdvertisingBuyMoney.request,
  handleDataFromSellForm: A.createAdvertisingSellMoney.request},
)(Dashboard)