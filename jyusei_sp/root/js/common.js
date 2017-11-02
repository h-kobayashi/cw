(function() {
  jQuery(document).ready(function($) {
    var menu, offsetY, time, topBtn;
    topBtn = $('.pagetop');
    topBtn.click(function() {
      return $('body,html').animate({
        scrollTop: 0
      }, 500);
    });
    false;
    menu = $('.globalnav__wrapper');
    menu.hide();
    $('.header-nav .menu-btn').on('click touch', this, function() {
      return menu.fadeIn();
    });
    $('.header-nav .close-btn').on('click touch', this, function() {
      return menu.fadeOut();
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

  $('.faqitem i').on('click touch', this, function() {
    return $(this).prev('p').toggleClass('opened');
  });

}).call(this);
