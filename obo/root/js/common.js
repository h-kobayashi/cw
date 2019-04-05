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
    menu = $('.sp_globalnav__wrapper');
    menu.hide();
    $('.header-nav .menu-items').on('click touch', this, function() {
      return menu.fadeIn();
    });
    $('.header-nav .menu-close').on('click touch', this, function() {
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

  $(".form-select select").minimalect({
    placeholder: "選択してください"
  });

  $('#entry__item03year').minimalect({
    placeholder: "年"
  });

  $('#entry__item03month').minimalect({
    placeholder: "月"
  });

  $('#entry__item03day').minimalect({
    placeholder: "日"
  });

  $('#request__item05city1').minimalect({
    placeholder: "都道府県"
  });

  $('#request__item05city2').minimalect({
    placeholder: "市区町村"
  });

  $('.btn-zip').on("click", function() {
    return AjaxZip3.zip2addr('request__item04', '', 'request__item05city1', 'request__item05city2', 'request__item05street');
  });

}).call(this);
