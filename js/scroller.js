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
