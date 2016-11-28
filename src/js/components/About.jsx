var React = require('react');
var Link = require('react-router').Link;
var Lego = require('../components/Lego.jsx');
var legoStore = require('../stores/legoStore.jsx');

var About = React.createClass ({

	getInitialState: function () {
		return {
			legos: legoStore.get()
		};
	},

	render: function () {
		var links = this.state.legos.map(function (lego) {
			return <Link key={lego.id} to={'about/' + lego.id}>{lego.name}</Link>;
		});
		return (
			<div>
				<h1>About {links}</h1>
				<h3>Beginnings</h3>
				<p>The name 'LEGO' is an abbreviation of the two Danish words "leg godt", meaning "play well".
				The LEGO Group was founded in 1932 by Ole Kirk Kristiansen. Lego produced their first
				construction toy in 1935.</p>
				<h3>Current</h3>
				<h3>Future</h3>
			</div>
		);
	}
});

module.exports = About;