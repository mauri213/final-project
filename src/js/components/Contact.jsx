var React = require('react');
var Contact = React.createClass ({

	render: function () {
		return (
			<div>
				<h1>Contact</h1>
				<div class="container">  
  <form id="contact" action="" method="post">
    <h3>Quick Contact</h3>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel" tabindex="3" required></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site starts with http://" type="url" tabindex="4" required></input>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
 
  
</div>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Contact;