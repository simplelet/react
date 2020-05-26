import React from 'react';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import Comment from '../containers/Comment';
import About from '../containers/About';
import User from '../components/User';
import NoMatch from '../components/NoMatch';
import '../style/router.css';

const BasicRouter = () => (
		<BrowserRouter>
			<ul className="router">
				<li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
				<li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
				<li><NavLink to="/user/default" activeClassName="selected">User</NavLink></li>
			</ul>
			<Switch>
				<Route exact path="/" component={Comment}></Route>
				<Route path="/about" component={About}></Route>
				<Route path="/user/:id" component={User}></Route>
				<Route component={NoMatch}></Route>
			</Switch>
		</BrowserRouter>
)

export default BasicRouter;