$(window).scroll(function() {
if ($(this).scrollTop() > 140){
    console.log("add sticky");
    $('.page-content > nav').addClass("sticky");
  }
  else{
    console.log("remove sticky");
    $('.page-content > nav').removeClass("sticky");
  }
});

$("page").bind('scroll', function() {
  console.log("Second fired");
});
