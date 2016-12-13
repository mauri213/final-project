var React = require('react');

var LegoDetails = React.createClass({
	render: function () {
		return (
			<div>
				<h4>Description</h4>
				<p>{this.props.lego.description}</p>
			</div>
		);
	}
});

module.exports = LegoDetails;