import React, { Component ,  Suspense, lazy} from 'react';

import history from './History/History'
import { Router, Route, Switch, browserHistory} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './screens/Home/Home.js'
import SignIn from './screens/SignIn/SignIn.js'
import SignUp from './screens/SignUp/SignUp.js'
import ItemDetail from './screens/MarketPlace/ItemDetail/ItemDetail'
import MarketPlace from './screens/MarketPlace/MarketPlace.js'
import Dashboard from './screens/Dashboard/Dashboard.js'
import Test from './screens/Test/Test.js'

import Button from 'react-bootstrap/lib/Button';
class App extends Component {
  render() {
    console.log(this.props);
    
    return (

      <Router history={history}>
        <div>
        <Header history={this.props.history}/>

          <Switch> 

            <Route exact path='/' component = {Dashboard}/>
            <Route path='/DashBoard' component = {Dashboard}/>
            <Route path='/MarketPlace' component = {MarketPlace}/>
            <Route path='/signin' component = {SignIn}/>
            <Route path='/signup' component = {SignUp}/>
            <Route path='/item/:id' component = {ItemDetail}/>
            <Route path='/test' component = {Test}/>
           
          </Switch>
  
        </div>
      </Router>

    );
  }
}

export default App;
