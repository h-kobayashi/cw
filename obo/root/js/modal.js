(function() {
  jQuery(document).ready(function($) {
    $('.wrapper-shadow-keep').hide();
    $('.keepmodal').hide();
    $('.wrapper-shadow-keep').on('click', function(event) {
      $('.wrapper-shadow-keep').fadeOut();
      return $('.keepmodal').fadeOut();
    });
    $('.btn-keep').on('click', function() {
      $('.wrapper-shadow-keep').show();
      return $('.keepmodal').show();
    });
    $('.wrapper-shadow-kodawari').hide();
    $('.kodawarimodal').hide();
    $('.wrapper-shadow-kodawari').on('click', function(event) {
      if (!$(event.target).closest('.kodawarimodal').length) {
        $('.kodawarimodal').fadeOut();
        $('.wrapper-shadow-kodawari').fadeOut();
        return $('body').removeClass('underwrapper');
      }
    });
    $('.wrapper-shadow-kodawari .btn-close').on('click', function() {
      $('.kodawarimodal').fadeOut();
      $('.wrapper-shadow-kodawari').fadeOut();
      return $('body').removeClass('underwrapper');
    });
    $('.btn-kodawari').on('click', function() {
      $('.wrapper-shadow-kodawari').show();
      $('.kodawarimodal').show();
      return $('body').addClass('underwrapper');
    });
    $('.kodawari-part').hide();
    $('.kodawari-full').hide();
    return $('.kodawarimodal .type-select li span').on('click', function() {
      var index;
      index = $('.kodawarimodal .type-select li span').index(this);
      $('.kodawarimodal section').hide();
      $('.kodawarimodal section').eq(index).show();
      $('.kodawarimodal .type-select li span').removeClass('selected');
      return $(this).addClass('selected');
    });
  });

}).call(this);
