import React from 'react'
import styles from './ShowValue.module.css'
export default function ShowValue(props) {
  return (

      <input type="text"  value={props.value} disabled className={styles.showValue}/>

  )
}
