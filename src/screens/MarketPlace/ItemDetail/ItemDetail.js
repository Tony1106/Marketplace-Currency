import React, { Component } from "react";
import { Table, Container } from "reactstrap";
import styles from "./styles.module.css";
import { rsf } from "../../../config/firebase/config";
import firebase from "firebase";
import { ButtonNormalSize } from "../../../components/Button/ButtonFullWidth";
export default class ItemDetail extends Component {
  state = {
    itemData: {
      userProfile: {
        displayName: ""
      }
    }
  };
  componentDidMount() {
    this.getItemData();
  }
  async getItemData() {
    let db = firebase.firestore();
    let docRef = db.collection("ItemData").doc(this.props.match.params.id);
    //  const itemData =  rsf.firestore.getDocument(`ItemData/${this.props.match.params.id}`);
    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          this.setState({ itemData: doc.data() });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }
  handleClick = (e)=> {
    e.preventDefault();
    console.log('click');
    
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
    console.log(userProfile.displayName);

    return (
      <div>
        <Container className={styles.container}>
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
                  {userProfile.displayName} + rating
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
                <td>{autoAcceptOffer}</td>
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
            <form className={styles.formContainer}>
              <div>
                <label htmlFor="offer-ItemDetail">
                  Please input your offer
                </label>
                <input type="number" name="offer" id="offer-ItemDetail" />
              </div>
              <ButtonNormalSize
                name="Submit you offer"
                onCustomClick={this.handleClick}
              />
              {/* <button>Submit you offer</button> */}
            </form>
          </div>
        </Container>
      </div>
    );
  }
}
