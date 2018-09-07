jQuery(document).ready ($) ->

  #pagetop
  topBtn = $('.pagetop')
  $(window).scroll ->
    if ($(this).scrollTop() > 400)
      topBtn.addClass('fixed')
    else
      topBtn.removeClass('fixed')
  topBtn.click ->
    $('body,html').animate { scrollTop: 0 }, 500
    false

  #image on/off
  $('a img').hover (->
    $(this).attr 'src', $(this).attr('src').replace('_off', '_on')
    return
  ), ->
    if !$(this).hasClass('currentPage')
      $(this).attr 'src', $(this).attr('src').replace('_on', '_off')

  #menu
  menu = $('.header__nav')
  $('.header__nav_btn,.header__nav_close').on 'click',this, ->
    $(this).toggleClass('opened')
    menu.slideToggle()

	#smooth scroll
  offsetY = -20
  time = 500
  $('a[href^="#"]').click ->
    target = $(@hash)
    if !target.length
      return
    targetY = target.offset().top + offsetY
    $('html,body').animate { scrollTop: targetY }, time, 'swing'
    window.history.pushState null, null, @hash
    false

	#header
	wh = $(window).height()
	hh = $('.header').height()
	fith = (hh - wh)
	$(window).scroll ->
		if ($(this).scrollTop() > fith)
			$('.header').addClass('fixed')
		else
			$('.header').removeClass('fixed')
