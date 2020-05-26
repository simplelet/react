import React from 'react';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import Comment from '../containers/Comment';
import About from '../containers/About';
import '../style/router.css';

const BasicRouter = () => (
		<BrowserRouter>
			<ul className="router">
				<li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
				<li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
			</ul>
			<Switch>
				<Route exact path="/" component={Comment}></Route>
				<Route path="/about" component={About}></Route>
			</Switch>
		</BrowserRouter>
)

export default BasicRouter;