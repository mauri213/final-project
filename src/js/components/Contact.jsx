var React = require('react');
var Contact = React.createClass ({

	render: function () {
		return (
			<div>
				<h1>Contact</h1>
				<div class="container">  
  				<form id="contact" action="" method="post">
      				<input placeholder="Your name" type="text" tabindex="1" required autofocus></input>
      				<input placeholder="Your Email Address" type="email" tabindex="2" required></input>
      				<textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
      			  <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
  				</form>
				</div>
			</div>
		);
	}
});

module.exports = Contact;