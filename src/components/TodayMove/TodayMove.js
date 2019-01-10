import React, { Component } from "react";
import firebase from "firebase";
import Cell from './Cell'
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { get } from "https";
export default class TodayMove extends Component {
  state = {
    data: {}
  }
  componentDidMount() {
    const db = firebase.firestore();
    const query = db.collection("liveRate").orderBy('timeStampFromServer').limit(1);
    query.get().then(res => {
      if (res) {
        let data;
        res.forEach(function(doc) {
           data = doc.data();
          
        });
        this.setState({data})
      } else {
        console.log("no data");
      }
    });
  }
  render() {
    const {rateAUD, rateUSD} = this.state.data
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Currency</Table.HeaderCell>
            <Table.HeaderCell>Rate</Table.HeaderCell>
            <Table.HeaderCell>Change (24hrs)</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
         <Cell name='AUD/VND' rate={rateAUD&&(parseInt(rateAUD.buy)+parseInt(rateAUD.sell))/2} change='2%'/>
         <Cell name='USD/VND' rate={rateUSD&&(parseInt(rateUSD.buy)+parseInt(rateUSD.sell))/2} change='2%'/>
        </Table.Body>
      </Table>
    );
  }
}
