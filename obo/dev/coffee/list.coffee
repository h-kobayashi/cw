jQuery(document).ready ($) ->
	
	# type select
	$('.search-part').hide()
	$('.search-full').hide()
	
	$('.search-conditions .type-select li span').on 'click', ->
		index = $('.search-conditions .type-select li span').index(this)
		$('.search-conditions section').hide()
		$('.search-conditions section').eq(index).show()
		$('.search-conditions .type-select li span').removeClass('selected')
		$(this).addClass('selected')
