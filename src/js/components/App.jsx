var React = require('react');
var Link = require('react-router').Link;

function getActiveClass (path) {
	var current = window.location.hash.slice(1);
	return current === path ? 'active' : '';
}

var App = React.createClass({
	render: function () {
		var hash = window.location.hash.slice(1);
		return (
			<div>
				<header>
					<Link to="/" className={getActiveClass('/') }>Home</Link>
					<Link to="/about" className={getActiveClass('/about') }>About</Link>
					<Link to="/contact/map" className={getActiveClass('/contact/map') }>Contact</Link>
				</header>
				<main>
					<h1>Legocy</h1>
					{this.props.children} 
				</main>
			</div>
		);
	}
});

module.exports = App;