import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import history from "./History/History";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import ItemDetail from "./screens/MarketPlace/ItemDetail/ItemDetail";
import MarketPlace from "./screens/MarketPlace/MarketPlace";
import Dashboard from "./screens/Dashboard/Dashboard";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";
import Test from "./screens/Test/Test";

const App = props => (
  <Router history={history}>
    <div>
      <Header history={props.history} />
      <Switch>
        <Route exact path="/" component={MarketPlace} />
        <Route exact path="/DashBoard" component={Dashboard} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/MarketPlace" component={MarketPlace} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/item/:id" component={ItemDetail} />
        <Route path="/test" component={Test} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
);

export default App;
