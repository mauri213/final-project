var React = require('react');
var legoStore = require('../stores/legoStore.jsx');

var Lego = React.createClass({

	getInitialState: function () {
		return {
			lego: legoStore.find(+this.props.params.id)
		};
	},

	render: function () {
		return (
			<div>{this.state.lego.name} - ${this.state.lego.salary}</div>

		);
	}
});

module.exports = Lego;
