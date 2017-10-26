(function() {
  jQuery(document).ready(function($) {
    $('.search__wrapper').hide();
    $('.searchmodal').hide();
    $('.searchmodal form section').hide();
    $('.searchmodal .close-btn').on('click', function() {
      $('.search__wrapper').hide();
      $('.searchmodal').fadeOut();
      $('.searchmodal form section').hide();
      return $('.main').show();
    });
    $('.searchbtn-area a').on('click', function() {
      var index;
      index = $('.searchbtn-area a').index(this);
      $('.main').hide();
      $('.searchmodal').hide();
      $('.search__wrapper').show();
      $('.searchmodal').eq(index).fadeIn();
      $('.searchmodal form section:first-of-type').show();
      return $('body,html').animate({
        scrollTop: 0
      }, 100);
    });
    $('#searchmodal-area form section nav li').on('click', function() {
      var areatype;
      areatype = $(this).attr('class');
      $('#searchmodal-area form section').hide();
      return $('#searchmodal-area form section#' + areatype).show();
    });
    $('.searchmodal section fieldset:first-of-type h5').addClass('opened');
    $('.searchmodal section fieldset h5').on('click', function() {
      $('.searchmodal fieldset h5').removeClass('opened');
      return $(this).addClass('opened');
    });
    return $('.searchitems__header dd').on('click', function() {
      var changetype;
      changetype = $(this).attr('class');
      $('.main').hide();
      $('.searchmodal').hide();
      $('.search__wrapper').show();
      $('.searchmodal#' + changetype).fadeIn();
      $('.searchmodal form section:first-of-type').show();
      return $('body,html').animate({
        scrollTop: 0
      }, 100);
    });
  });

}).call(this);
