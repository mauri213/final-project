var React = require('react');

var LegoDetails = require('./LegoDetails.jsx')

var LegoListItem = React.createClass({

	getInitialState: function () {
		return {
			detailsVisible: false
		}
	},
	render: function () {
		var details;

		if (this.state.detailsVisible) {
			details = <LegoDetails lego={this.props.lego} />;
		}

		return (
			<div onClick={this.handleDetailsClick}>
				{this.props.lego.name}
				{details}
			</div>
		);
	},
	
	handleDetailsClick: function () {
		this.setState({
			detailsVisible: !this.state.detailsVisible
		});
	}
});

module.exports = LegoListItem; 
