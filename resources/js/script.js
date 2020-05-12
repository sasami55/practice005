$(document).ready(function () {

    // sticky navigation
// $('.js--section-feature').waypoint({
//   handler: function(direction) {
//     if(direction == 'down'){
//       $('nav').addClass('sticky');
//     }else{
//       $('nav').removeClass('sticky');
//     }
//   }
// })


    $('.js--section-feature').waypoint(function(direction) {
        if(direction == 'down'){
          $('nav').addClass('sticky');
        }else{
          $('nav').removeClass('sticky');
        }
    })





    // navigation button
    $('a[href^="#"]').click(function(){
      var speed = 1000;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });



    // scroll event
    $('.js--wp-1').waypoint(function () {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn')
    },{
      offset:'200px;'
    });
    $('.js--wp-2').waypoint(function () {
      $('.js--wp-2').addClass('animate__animated animate__fadeIn')
    },{
      offset:'200px;'
    });
    $('.js--wp-3').waypoint(function () {
      $('.js--wp-3').addClass('animate__animated animate__zoomInDown')
    },{
      offset:'200px;'
    });


    // animate__animated animate__bounce

});