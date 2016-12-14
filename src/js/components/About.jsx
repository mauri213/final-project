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
			<div id="sobre">
				<h1>About {links}</h1>
				<h3>Beginnings*</h3>
				<p>In 1932, Ole Kirk Kristiansen, master carpenter and joiner, establishes his business in the village of Billund, Denmark. His firm manufactures stepladders, ironing boards, stools and wooden toys. The name 'LEGO' is an abbreviation of the two Danish words "leg godt", meaning "play well".
				Lego produced their first construction toy in 1935. In 1958, The current LEGO stud-and-tube coupling system is patented. The new coupling principle makes models much more stable. </p>
				<h3>Current*</h3>
				<p>LEGO® products are now sold in more than 140 countries. In 2014, The LEGO Movie premieres in 
				a number of countries. The movie is written by Phil Lord and Chris Miller and produced by
				Warner Brothers. It is the first time the LEGO universe has been pictured in a movie. As part of the strategy to expand the company’s global presence, the LEGO Group announces that in addition to
				the headquarters in Billund (Denmark), main offices will be established in London (England), Enfield (USA),
				Singapore and Shanghai (China).The strong growth continues and the LEGO Group presents very satisfactory annual results for 2013. In less than
				10 years, the company has quadrupled its revenue</p>
				<h3>Future**</h3>
				<p>The LEGO group has revealed that it has plans to make its company more eco-friendly in the years to come. LEGO wants to stop using plastic and find sustainable alternatives to its current materials.
				LEGO expects to recruit more than 100 employees in the coming years as it works toward making the company more eco-friendly by the year 2030. During this year and next year, a LEGO Sustainable Materials Centre organization will be established to develop partnerships with experts all around the globe.</p>
				<p id="firstnote">*https://www.lego.com/en-us/aboutus/lego-group/the_lego_history</p>
				<p id="secondnote">**http://www.hngn.com/articles/104292/20150625/lego-sustainable-pieces-lego-will-stop-using-plastic-plans-to-become-eco-friendly.htm</p>
			</div>
		);
	}
});

module.exports = About;