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
    $(window).on('load', function() {
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
    $(document).on('click touched', function(event) {
      var ww;
      ww = $(window).width();
      if (ww < 768 && !$(event.target).closest('.globalnav').length) {
        console.log('test');
        return $('.globalnav input').prop('checked', false);
      }
    });
    $('select').on('change', function() {
      var label, labelFor, selection;
      selection = $(this).find('option:selected').text();
      labelFor = $(this).attr('id');
      label = $('[for=\'' + labelFor + '\']');
      label.find('.label-desc').html(selection);
      if (selection === "都道府県") {
        label.find('.label-desc').addClass('default');
      } else {
        label.find('.label-desc').removeClass('default');
      }
    });
    return $('.btn-zip').on('click', function() {
      return AjaxZip3.zip2addr('zip', '', 'pref', 'city');
    });
  });

}).call(this);
