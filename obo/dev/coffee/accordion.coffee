jQuery(document).ready ($) ->
	
	$('.faq dd div').hide()
	
	$('.accordion').on 'click', ->
		$(this).toggleClass('opened')
		$(this).prev('div').slideToggle(100)
