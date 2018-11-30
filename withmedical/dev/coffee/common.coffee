jQuery(document).ready ($) ->

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

jQuery(document).ready ($) ->
	$(window).on 'load', ->
		ww = $(window).width()
		if ww > 767
			#header
			wh = $(window).height()
			hh = $('.header').height()
			fith = (hh - wh)
			$(window).scroll ->
				if $(window).scrollTop() > hh
					$('.fixheader').addClass('show')
				else
					$('.fixheader').removeClass('show')
