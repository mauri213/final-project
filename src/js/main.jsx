var React = require ('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
//var { Router, Route, hashHistory } = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var App = require('./components/App.jsx');
var Map = require('./components/Map.jsx');
var Home = require('./components/Home.jsx');
var About = require('./components/About.jsx');
var Contact = require('./components/Contact.jsx');
var Lego = require('./components/Lego.jsx');


var jsx = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="about/:id" component={Lego} /> 
			<Route path="contact" component={Contact}>
				<Route path="map" component={Map} />
			</Route>
		</Route>
	</Router>
);

ReactDOM.render(jsx, document.querySelector('#app'));