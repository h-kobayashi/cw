(function() {
  jQuery(document).ready(function($) {
    var offsetY, time;
    offsetY = -20;
    time = 500;
    return $('a[href^="#"]').click(function() {
      var target, targetY;
      target = $(this.hash);
      if (!target.length) {
        return;
      }
      targetY = target.offset().top + offsetY;
      $('html,body').animate({
        scrollTop: targetY
      }, time, 'swing');
      window.history.pushState(null, null, this.hash);
      return false;
    });
  });

  jQuery(document).ready(function($) {
    return $(window).on('load', function() {
      var fith, hh, wh, ww;
      ww = $(window).width();
      if (ww > 767) {
        wh = $(window).height();
        hh = $('.header').height();
        fith = hh - wh;
        return $(window).scroll(function() {
          if ($(window).scrollTop() > hh) {
            return $('.fixheader').addClass('show');
          } else {
            return $('.fixheader').removeClass('show');
          }
        });
      }
    });
  });

}).call(this);
