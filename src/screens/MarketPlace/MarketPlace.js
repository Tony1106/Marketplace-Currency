import React, { Component } from 'react'
import styles from './styles.module.css'
import Filter from './Filter'
import ListItemMarketPlaceBuy from '../../components/ListItem/ListItemMarketPlaceBuy'
import ListItemMarketPlaceSell from '../../components/ListItem/ListItemMarketPlaceSell'
import Spinning from '../../components/Loading/Spinning'
import {connect} from 'react-redux'
import * as A from '../../redux/ItemData/Action'
class MarketPlace extends Component {
  state = {
    itemData: {},
    isLoading: false
  }
  componentDidMount(){
    this.props.getDataFromFirebase();
    this.setState({isLoading: true})
    
  }
  componentWillReceiveProps(nextProps, state){
    if(nextProps.itemData != state.itemData){
      console.log(nextProps.itemData, 'item daat');
      this.setState({
        itemData: nextProps.itemData.itemData,
        isLoading: false
      })
      
    }
  }
  render() {
    let {itemData} = this.state;
    console.log(itemData, 'item data in render');
    
    
    if(itemData){
      var listItem=[];
      for (var key in itemData) {
       let data = itemData[key];
      let component;
      if(data.type =='Buy'){
        component = <ListItemMarketPlaceBuy itemData= {data} key={key} />;
      } else if (data.type =='Sell') {
        component = <ListItemMarketPlaceSell itemData= {data} key={key} />
      }
        listItem = [...listItem, component];
       }
     console.log(listItem, 'list item');
    }
    
    
    return (
      <div>
        Market Place banner add late
        
        <Filter/>
        <div className={styles.wrapListItem}>
          {this.state.isLoading? <Spinning isLoading= {false}/>: null}
          {listItem}
        </div>
        
        
      </div>
    )
  }
}

export default connect(
  (state)=> ({itemData: state.ItemData}),
  {getDataFromFirebase: A.getItemDataFromFirebase.request}
)(MarketPlace)
