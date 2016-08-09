$(window).scroll(function() {
if ($(this).scrollTop() > 140){
    $('.page-content > nav').addClass("sticky");
  }
  else{
    $('.page-content > nav').removeClass("sticky");
  }
});

$('#js-trigger-top').on('click', function(){
  // scroll to top
  $('body').animate({scrollTop: 0}, 'fast');
  // remove sticky class on fixed navbar
  $('.page-content > nav').removeClass("sticky");
});

// var sgnav = $( ".segmented-controls--fixed");
// var offset = sgnav.offset();
// // sgnav.html( "left: " + offset.left + ", top: " + offset.top );

// var segnav = $( ".segmented-controls--fixed" ).offset().top;
// var offset = segnav.offset();

var calcOffsetNav = function() {
  // calculate distance
  var distance = $( ".segmented-controls--fixed").offset().top;
  // if distance is greater than 250
  if(distance > 250) {
    return "greater than 250";
    // move navigation out of `.page-content`
    // On anchor click (alphabetical segmented controls)
    // - Remove existing margin-top to `page-content`
    // - Add margin-top to `.page-content`
    // - Note: Adding margin and then clicking on another link cancels out the `margin-top`
  } else {
    // if less than
    // Nothing. Could integrate with `scrollTop`
    return "less than <250";
  }
};

// print out in console the distance from top
console.log(calcOffsetNav());
