$(document).ready(function(){

  // hide our element on page load
  $('.masters').css('opacity', 0);

  $('.masters').waypoint(function() {
      $('.masters').addClass('fadeInLeft');
  }, { offset: '50%' });

});
