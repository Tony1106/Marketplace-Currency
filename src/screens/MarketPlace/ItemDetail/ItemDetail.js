import React, { Component } from "react";
import { Table, Container } from "reactstrap";
import * as A from '../../../redux/ItemData/Action'
import styles from "./styles.module.css";
import {connect} from 'react-redux'
import { Rating } from 'semantic-ui-react'
import firebase from "firebase";
import Popup from '../../../components/Popup/Popup'
import Spinning from '../../../components/Loading/Spinning'
import StepForDetailPage from '../../../components/Step/StepForDetailPage'
import { SemanticButton } from "../../../components/Button/ButtonFullWidth";
 class ItemDetail extends Component {
  state = {
    itemData: {
      userProfile: {
        displayName: ""
      }
    },
   offerRate: 0,
   messageToSellerOrBuyer: '',
  isLoading: false,
  isOpenPopup: false,
  isSubmit: false
  };
  componentDidMount() {
    this.getItemData();
  }
  componentWillReceiveProps(nextProps){

    
    if(nextProps.isLoading.isLoading!= this.state.isLoading){
console.log('change');

      
      this.setState({
        isLoading: false,
        isOpenPopup: true,
    
      })
    }
  }
  async getItemData() {
    this.setState({isLoading: true})
    let db = firebase.firestore();
    let docRef = db.collection("ItemData").doc(this.props.match.params.id);

    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          this.setState({ 
            itemData: doc.data(),
            isLoading:false });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }
  handleSubmit(e) {
   
    e.preventDefault();

    const itemID = this.props.match.params.id;
    const {offerRate,messageToSellerOrBuyer } = this.state;
    const offerData = {
      offerRate,
      messageToSellerOrBuyer,
      itemID
    };
    this.setState({
      isLoading: !this.state.isLoading,
      isSubmit: true})
  this.props.postOfferToDatabase(offerData);

    
  
 
  }
  handleChange = (e) => {
    const change = e.target.value;
    console.log('hehe', change);
    this.setState({ [e.target.name]: e.target.value})
    
  }
  handleClosePopup = () =>{
    this.setState({isOpenPopup:false})
  }
  render() {
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
    } = this.state.itemData;
let buttonType = this.state.isSubmit? 'disabled':null

    return (
      <div>
        <div className={styles.stepContainer}> <StepForDetailPage/></div>
         
        <Container className={styles.container}>
        {this.state.isOpenPopup? 
        <Popup 
        closePopup = {this.handleClosePopup} 
        itemData= {this.state.itemData}
        offerRate = {this.state.offerRate}
        /> : null}
        {this.state.isLoading? <Spinning/>: null}
          <Table>
            <thead>
              <tr>
                <th colSpan="2" className={styles.header}>
                  Advertisement details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className={styles.head}>
                  Trade with
                </th>
                <td className={styles.child}>
                  {" "}
                  {userProfile.displayName} 
                  <div style={{marginLeft: '20px', float: 'right'}}><Rating  icon='star' defaultRating={3} maxRating={5} disabled/></div>
                  
                </td>
              </tr>
              <tr>
                <th scope="row">Title</th>
                <td>{title}</td>
              </tr>
              <tr>
                <th scope="row">Description</th>
                <td>{description}</td>
              </tr>
              <tr>
                <th scope="row">Type</th>
                <td>
                  {currencyBuy} => {currencySell}
                </td>
              </tr>
              <tr>
                <th scope="row">Accept Rate</th>
                <td>1 {currencySell} = {autoAcceptOffer} {currencyBuy}</td>
              </tr>
              <tr>
                <th scope="row">Amount of Money</th>
                <td>{amountMoney}</td>
              </tr>
              <tr>
                <th scope="row">Payment method</th>
                <td>Cash in hand</td>
              </tr>

              <tr>
                <th scope="row">Location</th>
                <td>{location}</td>
              </tr>
            </tbody>
          </Table>

          <div>
            <form className={styles.formContainer} onSubmit={this.handleSubmit.bind(this)}>
              
                <label htmlFor="offer-ItemDetail">
                  Please input your offer
                </label>
                <input type="number" name="offerRate" id="offer-ItemDetail" value={this.state.offerRate} onChange= {this.handleChange}/>
                <label htmlFor="offer-Message">
                  Write a message to Seller/Buyer(optional)
                </label>
                <textarea type="textarea" name="messageToSellerOrBuyer" id="offer-Message" value= {this.state.messageToSellerOrBuyer} onChange= {this.handleChange}> </textarea>
              
              <SemanticButton
                name="Submit you offer"
                disabled={this.state.isSubmit}
                onCustomClick={this.handleSubmit.bind(this)}
              />
              {/* <button>Submit you offer</button> */}
            </form>
          </div>
        </Container>
      </div>
    );
  }
}
export default connect(
  (state)=> {
    return {
      isLoading: state.ItemData
    }
  },
  {postOfferToDatabase: A.postOfferToDatabase.request}
)(ItemDetail)