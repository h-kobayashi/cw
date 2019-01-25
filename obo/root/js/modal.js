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
    $('.kodawarimodal .type-select li span').on('click', function() {
      var index;
      index = $('.kodawarimodal .type-select li span').index(this);
      $('.kodawarimodal section').hide();
      $('.kodawarimodal section').eq(index).show();
      $('.kodawarimodal .type-select li span').removeClass('selected');
      return $(this).addClass('selected');
    });
    $('.wrapper-condition h2 a').on('click', function() {
      return $('body').removeClass('edit-condition');
    });
    $('.wrapper-condition ul li a').on('click', function() {
      return $(this).toggleClass('selected');
    });
    $('.edit-area').on('click', function() {
      $('body').addClass('edit-condition');
      return $('.wrapper-area').addClass('active');
    });
    $('.edit-job').on('click', function() {
      $('body').addClass('edit-condition');
      return $('.wrapper-job').addClass('active');
    });
    $('.edit-char1').on('click', function() {
      $('body').addClass('edit-condition');
      return $('.wrapper-char1').addClass('active');
    });
    $('.edit-char2').on('click', function() {
      $('body').addClass('edit-condition');
      return $('.wrapper-char2').addClass('active');
    });
    $('.edit-char3').on('click', function() {
      $('body').addClass('edit-condition');
      return $('.wrapper-char3').addClass('active');
    });
    $('.edit-char4').on('click', function() {
      $('body').addClass('edit-condition');
      return $('.wrapper-char4').addClass('active');
    });
    $('.edit-char5').on('click', function() {
      $('body').addClass('edit-condition');
      return $('.wrapper-char5').addClass('active');
    });
    $('.edit-char6').on('click', function() {
      $('body').addClass('edit-condition');
      return $('.wrapper-char6').addClass('active');
    });
    $('.edit-char7').on('click', function() {
      $('body').addClass('edit-condition');
      return $('.wrapper-char7').addClass('active');
    });
    $('.wrapper-shadow-policy').hide();
    $('.policymodal').hide();
    $('.policymodal .btn-close').on('click', function(event) {
      $('.wrapper-shadow-policy').fadeOut();
      return $('.policymodal').fadeOut();
    });
    return $('.btn-policy').on('click', function() {
      $('.wrapper-shadow-policy').show();
      return $('.policymodal').show();
    });
  });

}).call(this);
