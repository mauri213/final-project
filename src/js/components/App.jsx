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
				<button class="accordion">
					<div>
						<Link to="/" className={getActiveClass('/') }>Home</Link>
					</div>
					<div>
						<Link to="/about" className={getActiveClass('/about') }>About</Link>
					</div>
					<div>
						<Link to="/contact" className={getActiveClass('/contact') }>Contact</Link>
					</div>
				</button>
					<a href="https://www.youtube.com/user/LEGO"><img width="50" height="50" src="https://www.seeklogo.net/wp-content/uploads/2016/06/YouTube-icon-400x400.png"></img></a>
					<a href="https://twitter.com/LEGO_Group?lang=en"><img width="50" height="50"src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJj3luh7ZRZs_urkwoZSC6AtAAtU_8R9YuRomgKUqjjkIIsaJH"></img></a>
					<a href="https://www.facebook.com/LEGO/"><img width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2000px-F_icon.svg.png"></img></a>
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
// 		<img src="/users/mauri213/desktop/projects/final-project/facebook-icon.jpg">
// 		<img src="/users/mauri213/desktop/projects/final-project/twitter-icon.jpg">
// 		<img src="/users/mauri213/desktop/projects/final-project/youtube-icon.jpg">
// 	</header>

//accordion html
// <button class="accordion"></button>
// 

//accordion jsx
// var acc = document.getElementsByClassName("accordion");

// for (var i = 0; i < acc.length; i++) {
//     acc[i].onclick = function(){
//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("show");
//   }
// }