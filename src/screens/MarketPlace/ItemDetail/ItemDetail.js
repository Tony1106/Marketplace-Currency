import React, { Component } from 'react'
import { Table,Container } from 'reactstrap';
import styles from './styles.module.css';


export default class ItemDetail extends Component {

  render() {
    const {id} = this.props.match.params;
    console.log(id);
    
    return (
      <div>
        <Container> 
        <Table>
        <thead>
        <tr>
            <th colspan="2" className={styles.header}>Advertisement details</th>
        </tr>
    </thead>
        <tbody>
          <tr>
            <th scope="row" className= {styles.head}>Trade with</th>
            <td className={styles.child}>UserName + rating</td>
           
          </tr>
          <tr>
            <th scope="row">Title</th>
            <td>I want to buy USD</td>

          </tr>
          <tr>
            <th scope="row">Description</th>
            <td>Give me a good offer please</td>

          </tr>
          <tr>
            <th scope="row">Type</th>
            <td>UDS => VND</td>
           
          </tr>
          <tr>
            <th scope="row">Accept Rate</th>
            <td>16.7</td>
           
          </tr>
          <tr>
            <th scope="row">Amount of Money</th>
            <td>1.000</td>

          </tr>
          <tr>
            <th scope="row">Payment method</th>
            <td>Cash in hand</td>

          </tr>
        
          <tr>
            <th scope="row">Location</th>
            <td>Victoria</td>

          </tr>
        </tbody>
      </Table>

      <div>
        <form >
          <label for='offer-ItemDetail'>Please input your offer</label>
          <input type="number" name="offer" id="offer-ItemDetail"/>
          <button>Submit you offer</button>
        </form>
      </div>
        </Container>
    
        
      </div>
    )
  }
}
