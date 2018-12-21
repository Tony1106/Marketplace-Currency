import React, { Component } from 'react'
import styles from './ListItemMarketPlace.module.css'
export default class ListItemMarketPlace extends Component {
  render() {
    return (
      <a href='#' className={styles.wrapItem}>
          
          <div >
            
          </div>
          <div>User Name</div>
          <div>User Rating</div>
          <div>Buy</div>
          <div>Quantity</div>
          <div>Min Offer</div>
          <div>Auto Accept</div>
          <div>
              <button>Offer</button>
          </div>

      </a>
    )
  }
}
