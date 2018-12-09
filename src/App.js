import React, { Component ,  Suspense, lazy} from 'react';

import history from './History/History'
import { Router, Route, Switch, browserHistory} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './screens/Home/Home.js'
import SignIn from './screens/SignIn/SignIn.js'
import SignUp from './screens/SignUp/SignUp.js'
import BuyAndSell from './screens/BuyAndSell/BuyAndSell.js'
import Button from 'react-bootstrap/lib/Button';
class App extends Component {
  render() {
    console.log(this.props);
    
    return (

      <Router history={history}>
        <div>
        <Header history={this.props.history}/>

          <Switch> 

            <Route exact path='/' component = {Home}/>
            <Route path='/signin' component = {SignIn}/>
            <Route path='/signup' component = {SignUp}/>
            <Route path='/BuyAndSell' component = {BuyAndSell}/>
          </Switch>
  
        </div>
      </Router>

    );
  }
}

export default App;
