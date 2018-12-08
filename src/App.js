import React, { Component } from 'react';


import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './screens/Home/Home.js'
class App extends Component {
  render() {
    return (
      <div>

     
      <Router>
        <Route path='/' component = {Home}/>
      </Router>
      </div>
    );
  }
}

export default App;
