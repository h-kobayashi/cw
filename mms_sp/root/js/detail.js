(function() {
  jQuery(document).ready(function($) {
    var access, floatmenu, info, interview, nav, navTop, recruit, review;
    $('.images').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'ease',
      draggable: true,
      arrows: true,
      infinite: true,
      swipe: true
    });
    nav = $('.detail_nav');
    navTop = nav.offset().top;
    floatmenu = function() {
      var winTop;
      winTop = $(this).scrollTop();
      if (winTop >= navTop) {
        return nav.addClass('fixed');
      } else if (winTop <= navTop) {
        return nav.removeClass('fixed');
      }
    };
    $(window).scroll(floatmenu);
    $('body').bind('touchmove', floatmenu);
    info = $('#info').offset().top - 63;
    interview = $('#interview').offset().top - 140;
    recruit = $('#recruit').offset().top - 140;
    review = $('#review').offset().top - 140;
    access = $('#access').offset().top - 140;
    $('.dinfo a').on('click', this, function() {
      return $('html,body').animate({
        scrollTop: info
      });
    });
    $('.dinterview a').on('click', this, function() {
      return $('html,body').animate({
        scrollTop: interview
      }, alert(interview));
    });
    $('.drecruit a').on('click', this, function() {
      return $('html,body').animate({
        scrollTop: recruit
      });
    });
    $('.dreview a').on('click', this, function() {
      return $('html,body').animate({
        scrollTop: review
      });
    });
    return $('.daccess a').on('click', this, function() {
      return $('html,body').animate({
        scrollTop: access
      });
    });
  });

}).call(this);
