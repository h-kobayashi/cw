(function() {
  jQuery(document).ready(function($) {
    var head;
    head = $('.system__list li tr:first-of-type');
    return head.bind('touch click', function() {
      return $(this).parents('li').toggleClass('hide');
    });
  });

}).call(this);
