  var headerHeight = $('header').height();
  console.log(headerHeight);
  $('#about').click(function() {
      console.log(this)
      $('html, body').animate({
          scrollTop: $('#prototype').offset().top

      }, 2000);

  });

  var headerHeight = $('header').height();
  console.log(headerHeight);
  $('#plans').click(function() {
      console.log(this)
      $('html, body').animate({
          scrollTop: $('#price-chart').offset().top

      }, 2000);
  });
  var headerHeight = $('header').height();
  console.log(headerHeight);
  $('#contact').click(function() {
      console.log(this)
      $('html, body').animate({
          scrollTop: $('#form-container').offset().top

      }, 2000);
  });

  $(window).resize(function() {
      console.log('resize');

  });
  jQuery(document).ready(function($) {
      // browser window scroll (in pixels) after which the "back to top" link is shown
      var offset = 20,
          //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
          offset_opacity = 1200,
          //duration of the top scrolling animation (in ms)
          scroll_top_duration = 700,
          //grab the "back to top" link
          $back_to_top = $('.cd-top');



      //smooth scroll to top
      $back_to_top.on('click', function(event) {
          event.preventDefault();
          $('body,html').animate({
              scrollTop: 0,
          }, scroll_top_duration);
      });

  });


  jQuery('#cody-info ul li').eq(1).on('click', function() {
      $('#cody-info').hide();
  });
