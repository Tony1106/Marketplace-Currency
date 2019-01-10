import React, { Component } from "react";

import history from "./History/History";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home.js";
import SignIn from "./screens/SignIn/SignIn.js";
import SignUp from "./screens/SignUp/SignUp.js";
import ItemDetail from "./screens/MarketPlace/ItemDetail/ItemDetail";
import MarketPlace from "./screens/MarketPlace/MarketPlace.js";
import Dashboard from "./screens/Dashboard/Dashboard.js";
import About from "./screens/About/About.js";
import Contact from "./screens/Contact/Contact.js";
import Test from "./screens/Test/Test.js";

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<div>
					<Header history={this.props.history} />

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
	}
}

export default App;
