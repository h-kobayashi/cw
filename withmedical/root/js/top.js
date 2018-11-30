(function() {
  $(window).on('load', function() {
    var ww;
    ww = $(window).width();
    if (ww < 768) {
      $('.branding').flexslider({
        animation: "fade"
      });
      return $('.pickup-slides').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a class="slick-prev" href="#"><i class="fas fa-chevron-circle-left"></i></a>',
        nextArrow: '<a class="slick-next" href="#"><i class="fas fa-chevron-circle-right"></i></a>',
        zIndex: 9
      });
    } else {
      $('.branding').flexslider({
        animation: "fade"
      });
      return $('.pickup-slides').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<a class="slick-prev" href="#"><i class="fas fa-chevron-circle-left"></i></a>',
        nextArrow: '<a class="slick-next" href="#"><i class="fas fa-chevron-circle-right"></i></a>',
        zIndex: 9
      });
    }
  });

}).call(this);
