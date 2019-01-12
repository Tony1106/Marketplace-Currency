import React from "react";
import { Icon, Button, Label } from "semantic-ui-react";
import styles from "./styles.module.css";

export default function Popup(props) {
  const {
    amountMoney,
    autoAcceptOffer,
    currencyBuy,
    currencySell,
    description,
    liveRate,
    location,
    minOffer,
    title,
    type,
    userProfile
  } = props.itemData;
  const separateNumber = n =>
    String(n).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  const totalPay = separateNumber(amountMoney * props.offerRate);

  return (
    <div className={styles.popup}>
      <div className={styles.popup_inner}>
        <h1 className={styles.title}>Your offer is set</h1>
        {/* <p className={styles.content}> Your offer is set</p> */}
        <div>
          <div className={styles.content}>
            <Button as="div" labelPosition="right">
              <Button color="red">
                <Icon name="usd" />
                Buy
              </Button>
              <Label as="a" basic color="red" pointing="left">
                {currencyBuy}
              </Label>
            </Button>
            <Icon name="arrow right" />
            <Button as="div" labelPosition="right">
              <Label as="a" basic color="blue" pointing="right">
                {currencySell}
              </Label>
              <Button basic color="blue">
                <Icon name="eur" />
                Sell
              </Button>
            </Button>
          </div>
          <div className={styles.rateWraper}>
            <span>Offer Rate</span>
            <span className={styles.rate}>
              {" "}
              {`1 AUD = ${separateNumber(props.offerRate)} VND`}
            </span>
          </div>
          <div className={styles.rateWraper}>
            <span>Total Estimate Paid</span>
            <span className={styles.rate}>{`${totalPay} VND`}</span>
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: "12px", marginTop: "10px" }}>
          ***Waiting for respond, we will let you know as soon as posible when
          the trade is lock***
        </p>
        <button
          onClick={props.closePopup}
          type="button"
          className={styles.closeButton}
        >
          {" "}
          <Icon name="close" />
        </button>
      </div>
    </div>
  );
}
