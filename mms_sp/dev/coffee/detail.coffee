jQuery(document).ready ($) ->

  #image slider
  $('.images').slick
  	autoplay: true,
  	autoplaySpeed: 5000,
  	cssEase: 'ease',
  	draggable: true,
  	arrows: true,
  	infinite: true,
  	swipe: true,

  #nav fixed
  nav = $('.detail_nav')
  navTop = nav.offset().top
  floatmenu = ->
  	winTop = $(this).scrollTop()
  	if winTop >= navTop
  		nav.addClass('fixed')
  	else if winTop <= navTop
  		nav.removeClass('fixed')
  $(window).scroll(floatmenu)
  $('body').bind('touchmove', floatmenu)

  #nav
  info = $('#info').offset().top - 63
  interview = $('#interview').offset().top - 140
  recruit = $('#recruit').offset().top - 140
  review = $('#review').offset().top - 140
  access = $('#access').offset().top - 140

  $('.dinfo a').on 'click',this, ->
  	$('html,body').animate
  		scrollTop : info
  $('.dinterview a').on 'click',this, ->
  	$('html,body').animate
  		scrollTop : interview
  $('.drecruit a').on 'click',this, ->
  	$('html,body').animate
  		scrollTop : recruit
  $('.dreview a').on 'click',this, ->
  	$('html,body').animate
  		scrollTop : review
  $('.daccess a').on 'click',this, ->
  	$('html,body').animate
  		scrollTop : access


