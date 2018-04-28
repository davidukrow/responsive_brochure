$(window).scroll(function() {
  scroll_func();
})

function scroll_func() {

  var wScroll = $(window).scrollTop()


  $('.scroll_func--bg').css('background-position', 'center ' + (wScroll*0.75)+'px');


  $('.scroll_func--box').css('top', -5 + (wScroll*.005)+'em')

}
