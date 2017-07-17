jQuery(document).ready ($) ->
	
	head = $('.system__list li tr:first-of-type')	
	head.bind 'touch click', ->
		$(this).parents('li').toggleClass('hide')
		