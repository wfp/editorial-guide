$(window).scroll(function() {
if ($(this).scrollTop() > 140){
    $('.page nav').addClass("sticky");
  }
  else{
    $('.page nav').removeClass("sticky");
  }
});

$('#js-trigger-top').on('click', function(){
  // scroll to top
  $('body').animate({scrollTop: 0}, 'fast');
  // remove sticky class on fixed navbar
  $('.page-content > nav').removeClass("sticky");
});


(function () {

  'use strict';
  // @todo: move navigation out of `.page-content`
  // - currently `segmented-control` is inside `.page-content`
  $('.seg-control--link').on('click', function () {
    // distance of `segmented-control` from top. This is the overlap.
    var distance = $(".segmented-controls--fixed").position().top;
    // remove existing margin-top
    $('.page-content').css('margin-top', '');
    // @todo: add new margin to offset margin-top - need to add distance to offset overlap
    // - can work out position from top via `position().top` or `offset()`
    $('.page-content').css('margin-top', offset);
  });
})();
