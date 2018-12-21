import React, { Component } from 'react'
import styles from './styles.module.css'
import Filter from './Filter'
import ListItem from './ListItem'

export default class MarketPlace extends Component {
  render() {
    return (
      <div>
        Market Place banner add late
        
        <Filter/>
        <ListItem/>
      </div>
    )
  }
}
