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
			</div>
		);
	}
});

module.exports = About;