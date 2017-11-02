jQuery(document).ready ($) ->

  #pagetop
  topBtn = $('.pagetop')
  topBtn.click ->
    $('body,html').animate { scrollTop: 0 }, 500
		false
  #menu
  menu = $('.globalnav__wrapper')
  menu.hide()
  $('.header-nav .menu-btn').on 'click touch',this, ->
    menu.fadeIn()
  $('.header-nav .close-btn').on 'click touch',this, ->
    menu.fadeOut()
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
	
	#about - faq
	$('.faqitem i').on 'click touch',this, ->
		$(this).prev('p').toggleClass('opened')

