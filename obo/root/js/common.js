(function() {
  var fith, hh, wh;

  jQuery(document).ready(function($) {
    var menu, offsetY, time, topBtn;
    topBtn = $('.pagetop');
    $(window).scroll(function() {
      if ($(this).scrollTop() > 400) {
        return topBtn.addClass('fixed');
      } else {
        return topBtn.removeClass('fixed');
      }
    });
    topBtn.click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    $('a img').hover((function() {
      $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
    }), function() {
      if (!$(this).hasClass('currentPage')) {
        return $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
      }
    });
    menu = $('.header__nav');
    $('.header__nav_btn,.header__nav_close').on('click', this, function() {
      $(this).toggleClass('opened');
      return menu.slideToggle();
    });
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

  wh = $(window).height();

  hh = $('.header').height();

  fith = hh - wh;

  $(window).scroll(function() {
    if ($(this).scrollTop() > fith) {
      return $('.header').addClass('fixed');
    } else {
      return $('.header').removeClass('fixed');
    }
  });

}).call(this);
