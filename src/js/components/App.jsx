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
					<Link to="/contact" className={getActiveClass('/contact') }>Contact</Link>
					<a href="https://www.facebook.com/LEGO/">Facebook</a>
					<a href="https://twitter.com/LEGO_Group?lang=en">Twitter</a>
					<a href="https://www.youtube.com/user/LEGO">YouTube</a>
				</header>
				<main>
					<h1>Legocy</h1>
					{this.props.children} 
				</main>
				<div>
				<footer>Legal stuff</footer>
				</div>
			</div>
		);
	}
});

module.exports = App;

// <header>
// 		<img src="/users/mauri213/desktop/projects/finalproject/facebook-icon.jpg">
// 		<img src="/users/mauri213/desktop/projects/finalproject/twitter-icon.jpg">
// 		<img src="/users/mauri213/desktop/projects/finalproject/youtube-icon.jpg">
// 	</header>

//accordion html//
// <button class="accordion"></button>
// 

//accordion jsx//
// var acc = document.getElementsByClassName("accordion");

// for (var i = 0; i < acc.length; i++) {
//     acc[i].onclick = function(){
//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("show");
//   }
// }