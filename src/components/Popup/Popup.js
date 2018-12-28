import React from 'react'
import styles from './styles.module.css'
import {Icon, Button, Label} from 'semantic-ui-react'

export default function Popup(props) {
  return (
    <div className={styles.popup}>
        <div className={styles.popup_inner}>
        <h1 className={styles.title}>{props.title}</h1>
        {/* <p className={styles.content}> Your offer is set</p> */}
        <div>
            <div className={styles.content}>
            <Button as='div' labelPosition='right'>
      <Button color='red'>
        <Icon name='usd' />
        Buy
      </Button>
      <Label as='a' basic color='red' pointing='left'>
        2,048
      </Label>
    </Button>
    <Icon name='arrow right' />
    <Button as='div' labelPosition='right'>
      
      <Label as='a' basic color='blue' pointing='right'>
        2,048
      </Label>
      <Button basic color='blue'>
        <Icon name='eur' />
        Sell
      </Button>
    </Button> </div>
    <div className={styles.rateWraper}> 
        <span>Rate</span>
    <span className={styles.rate}> 1 AUD = 17.8 VND</span>
    </div>
    <div className={styles.rateWraper}> 
        <span>Total Estimate Paid</span>
    <span className={styles.rate}> 3.379.000 VND</span>
    </div>
  </div>
  <p style={{textAlign:'center', fontSize: '12px', marginTop:'10px'}}>***Waiting for respond, we will let you know as soon as posible when the trade is lock***</p>
        <button onClick={props.closePopup} className={styles.closeButton}> <Icon name='close' /></button>
        </div>
  </div>
  )
}



 