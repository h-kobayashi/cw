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
    $('.searchmodal-area > nav li').on('click', function() {
      var index;
      index = $('.searchmodal-area > nav li').index(this);
      $('.searchmodal-area form section').hide();
      return $('.searchmodal-area form section').eq(index).show();
    });
    $('.searchmodal fieldset:first-of-type h5').addClass('opened');
    return $('.searchmodal fieldset h5').on('click', function() {
      $('.searchmodal fieldset h5').removeClass('opened');
      return $(this).addClass('opened');
    });
  });

}).call(this);
