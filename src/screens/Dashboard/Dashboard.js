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
import Buy from './Buy/Buy'
import style from "./style.module.css";
export default class Dashboard extends Component {
  state = {
    value: {},
    isBuy: true
  };
  render() {
    //   console.log(style.button-group);
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
            {this.state.isBuy? <Buy/> : <Sell/>}
            </div>
        </div>
      </Container>
    );
  }
}
