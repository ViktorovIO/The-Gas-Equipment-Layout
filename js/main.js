$(document).ready(function () {
  $('.mix-it-up-content').mixItUp();
});
$(document).ready(function () {
  $('a[href^="#"], *[data-href^="#"]').on('click', function (e) {
    e.preventDefault();
    var t = 1000;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({
      scrollTop: $(d).offset().top
    }, t);
  });
});
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#up-arrow').fadeIn();
    } else {
      $('#up-arrow').fadeOut();
    }
  });
  $('#up-arrow').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
  });
});
jQuery(function ($) {
  $(document).ready(function () {
    $('.navbar').stickUp();
  });
}); // jQuery(function($) {
//     $(window).scroll(function(){
//         if($(this).scrollTop()>140){
//             $('.nav').addClass('fixed');
//         }
//         else if ($(this).scrollTop()<140){
//             $('.nav').removeClass('fixed');
//         }
//     });
// });