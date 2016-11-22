var React = require('react');
var Map = React.createClass ({

	render: function () {
		return <h1>Map</h1>
		{this.props.children}
	}
});

module.exports = Map;
