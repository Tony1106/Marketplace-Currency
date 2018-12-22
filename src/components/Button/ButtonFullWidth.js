import React from "react";
import button from '../../css/components/button'
import styles from './Button.module.css'
function ButtonFullWidth(props) {
  return (
    <div>
      <button className={styles.buttonFullWidth}>{props.name}</button>
    </div>
  );
}

function OfferButton(props) {
  return (
    <div>
      <button className={styles.OfferButton}>{props.name}</button>
    </div>
  );
}
export {
  ButtonFullWidth, OfferButton
}