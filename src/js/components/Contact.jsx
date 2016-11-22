var React = require('react');
var Contact = React.createClass ({

	render: function () {
		return (
			<div>
				<h1>Contact</h1>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Contact;