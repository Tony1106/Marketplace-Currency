import React, { Component } from "react";
import styles from "./ListItemMarketPlace.module.css";
import MAvatar from "../../components/Avatar";
import OfferButton from '../../components/Button/ButtonFullWidth'
import {BuyText, SellText} from "../../components/TextTypo";
import ShowValue from '../../components/ShowValue'
import RatingDiabled from "../../components/Rating/RatingDisabled";
export default class ListItemMarketPlace extends Component {
  render() {
    return (
      <a href="#" className={styles.wrapItem}>
        <div />
        
          <MAvatar
            src="https://d1klenmqvfdv9g.cloudfront.net/wp-content/uploads/2018/09/wpmanageninja_logo_icon-1-1.png"
            size="10px"
          />{" "}
       
        
          <RatingDiabled stars={4} />
      
      <BuyText />

        <ShowValue value='20'/>   
        <ShowValue value='20.50'/>   
        <ShowValue value='USD'/>   
        <ShowValue value='Victoria'/>   
      
        <div>
          <button>Offer</button>
        </div>
      </a>
    );
  }
}
