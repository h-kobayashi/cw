(function() {
  jQuery(document).ready(function($) {
    $('.faq dd div').hide();
    return $('.accordion').on('click', function() {
      $(this).toggleClass('opened');
      return $(this).prev('div').slideToggle(100);
    });
  });

}).call(this);
