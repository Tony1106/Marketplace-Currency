import React, { Component ,  Suspense, lazy} from 'react';


import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './screens/Home/Home.js'
import SignIn from './screens/SignIn/SignIn.js'
import SignUp from './screens/SignUp/SignUp.js'
import BuyAndSell from './screens/BuyAndSell/BuyAndSell.js'

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch> 
          <Route exact path='/' component = {Home}/>
          <Route path='/signin' component = {SignIn}/>
          <Route path='/signup' component = {SignUp}/>
          <Route path='/BuyAndSell' component = {BuyAndSell}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
