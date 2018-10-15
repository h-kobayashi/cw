(function() {
  jQuery(document).ready(function($) {
    $('.search-part').hide();
    $('.search-full').hide();
    return $('.search-conditions .type-select li span').on('click', function() {
      var index;
      index = $('.search-conditions .type-select li span').index(this);
      $('.search-conditions section').hide();
      $('.search-conditions section').eq(index).show();
      $('.search-conditions .type-select li span').removeClass('selected');
      return $(this).addClass('selected');
    });
  });

}).call(this);
