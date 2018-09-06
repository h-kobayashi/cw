(function() {
  jQuery(document).ready(function($) {
    $('.wrapper-shadow').hide();
    $('.searchmodal').hide();
    $('.searchmodal form section').hide();
    $('.searchmodal form section:first-of-type').show();
    $('.btn-close').on('click', function() {
      $('.searchmodal').fadeOut();
      return $('.wrapper-shadow').fadeOut();
    });
    $('.wrapper-shadow').on('click', function(event) {
      if (!$(event.target).closest('.searchmodal').length) {
        $('.searchmodal').fadeOut();
        return $('.wrapper-shadow').fadeOut();
      }
    });
    $('.searchmodal nav li').on('click', function() {
      var index;
      index = $('.searchmodal nav li').index(this);
      $(this).parents('nav').find('li').removeClass('selected');
      $(this).addClass('selected');
      $('form section').hide();
      return $('form section').eq(index).show();
    });
    $('.searchitem-business a').on('click', function() {
      $('.wrapper-shadow').show();
      return $('.searchmodal-business').show();
    });
    $('.searchitem-job a').on('click', function() {
      $('.wrapper-shadow').show();
      return $('.searchmodal-job').show();
    });
    return $('.searchitem-area a').on('click', function() {
      $('.wrapper-shadow').show();
      return $('.searchmodal-area').show();
    });
  });

}).call(this);
