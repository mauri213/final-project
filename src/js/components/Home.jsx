var React = require('react');
var Home = React.createClass ({

	render: function () {
		return  <h1>Home</h1>;
	}
});


module.exports = Home;
//submit button
// <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>

//lego sound
//  	function play(){
//        var audio = document.getElementById("audio");
//        audio.play();
//                  }

// <audio id="audio" src="/users/mauri213/desktop/projects/finalproject/lego-click.wav" ></audio>
// <script type="text/javascript" src="bundle.js"></script>

//pictures
// <img src="/users/mauri213/desktop/projects/finalproject/lego-head-silhouette.jpg">
// <img src="/users/mauri213/desktop/projects/finalproject/FullSizeRender.jpg"" value="SUBMIT" onclick="play()">

//slideshow
// var counter = 0,
//     $items = $('.diy-slideshow figure'), 
//     numItems = $items.length; 

// var showCurrent = function(){
//     var itemToShow = Math.abs(counter%numItems);
   
//   $items.removeClass('show'); 
//   $items.eq(itemToShow).addClass('show');    
// };
 
// $('.next').on('click', function(){
//     counter++;
//     showCurrent(); 
// });
// $('.prev').on('click', function(){
//     counter--;
//     showCurrent(); 
// });

// if('ontouchstart' in window){
//   $('.diy-slideshow').swipe({
//     swipeLeft:function() {
//       counter++;
//       showCurrent(); 
//     },
//     swipeRight:function() {
//       counter--;
//       showCurrent(); 
//     }
//   });
// }

//photo gallery
// var $overlay = $('<div id="overlay"></div>');
// var $image = $("<img>");

// $overlay.append($image);

// $("body").append($overlay);

//   $("#photo-gallery a").click( function(event) {
//     event.preventDefault();
//     var imageLocation = $(this).attr("href");

//     $image.attr("src", imageLocation);

//     $overlay.show();
//   } );

//   $("#overlay").click(function() {
//     $( "#overlay" ).hide();
//   });
