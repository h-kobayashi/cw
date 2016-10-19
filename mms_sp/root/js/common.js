(function() {
  jQuery(document).ready(function($) {
    var menu, topBtn;
    topBtn = $('.pagetop');
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
    menu = $('.block_menu');
    return $('.menubtn,.menuclose').on('click', this, function() {
      $(this).toggleClass('opened');
      return $('.block_menu').slideToggle();
    });
  });

}).call(this);
