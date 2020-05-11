$(document).ready(function () {


  // sticky navigation
var offset = $('.js--section-feature').offset().top;
var offset = offset -100;
 
    $(window).scroll(function () {
        if ($(window).scrollTop() > offset) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });


    // scroll event
    $('a[href^="#"]').click(function(){
      var speed = 1000;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });



});