var React = require('react');

var legoStore = require('../stores/legoStore');
var LegoListItem = require('./LegoListItem.jsx');

var LegoList = React.createClass({
	getInitialState: function () {
		return {
			offset: 100,
			legos: legoStore.fetchLego()
		};
	},

	componentWillMount: function () {
		var _this = this;
		legoStore.on('update', function () {
			_this.setState({
				legos: legoStore.getLegos()
			});
		});
	},

	render: function () {
		var legoListItems = this.state.legos.map(function (lego) {
			return <LegoListItem key={lego.id} lego={lego} />;
		});
		return (
			<div>
				{legoListItems}
				Loaded: {this.state.legos.length}
				<a href="#" onClick={this.handleLoadClick}>(Load More)</a>
			</div>
		);
	},

	handleLoadClick: function () {
		this.setState({
			offset: this.state.offset + 100
		});
		LegoStore.fetchLegos(this.state.offset);
	}
});

module.exports = LegoList;
