$(window).scroll(function() {
if ($(this).scrollTop() > 140){
    $('.page-content > nav').addClass("sticky");
  }
  else{
    $('.page-content > nav').removeClass("sticky");
  }
});
