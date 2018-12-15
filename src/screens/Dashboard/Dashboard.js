import React, { Component } from "react";
import { Button, ButtonGroup, Container } from "reactstrap";
import style from  "./style.css";
export default class Dashboard extends Component {
  render() {
    //   console.log(style.button-group);
      console.log(this.props.match.params);
      
    return (
      <Container>
        <div>
          <h3 className="style.title">Welcome to Exchange Me</h3>
          <h5>Would you like to buy or sell?</h5>
          <div className={style['button-group']}>
            <div className="button-sell button ">
              <button  className='active'>Buy</button>
            </div>
            <div className="button-buy button">
              <button>Sell</button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
