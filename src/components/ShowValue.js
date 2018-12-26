import React from "react";
import styles from "./ShowValue.module.css";

export default function ShowValue(props) {
  console.log(props.data, 'data in show value');
  let {amountMoney,
    autoAcceptOffer,
    currencySell,
    currencyBuy,
    type} = props.data;
    const moneyLength = amountMoney.toString().length;
if(moneyLength> 3 && moneyLength <= 5) {
  amountMoney = `${parseInt(amountMoney)/1000}k`
}
  return (
  
    <div className={styles.container}>
      {/* <input type="text"  value={props.value} disabled className={styles.showValue}/> */}
      <div style={{display: 'flex', alignItems:'space-between', flexDirection:'column'}}>
          <div className={styles.typeContainer}>
            <div className={styles.icon}>
              <i className="fas fa-dollar-sign"></i>  
              <p>{currencySell}</p>
            </div>
            
            <i className="fas fa-arrow-right" style={{marginLeft: '10px', marginRight: '10px'}}></i>
            <div className={styles.icon}>
              <i className={styles.iconExchange}>đ</i>
              <p>{currencyBuy}</p>
            </div>
            
          </div>
          <div> Accept Rate: {autoAcceptOffer}</div>
      </div>
       
      <div className={styles.numberContainer} > {amountMoney}</div>
       
    </div>
  );
}



   