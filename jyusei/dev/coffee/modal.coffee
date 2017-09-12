jQuery(document).ready ($) ->
	
	$('.wrapper-shadow').hide()
	$('.searchmodal').hide()
	$('.searchmodal form section').hide()
	$('.searchmodal form section:first-of-type').show()
	
	$('.btn-close').on 'click', ->
		$('.searchmodal').fadeOut()
		$('.wrapper-shadow').fadeOut()
	$('.wrapper-shadow').on 'click', (event)->
		if !$(event.target).closest('.searchmodal').length
			$('.searchmodal').fadeOut()
			$('.wrapper-shadow').fadeOut()
	
	$('.searchmodal nav li').on 'click', ->
		index = $('.searchmodal nav li').index(this)
		$(this).parents('nav').find('li').removeClass('selected')
		$(this).addClass('selected')
		$('form section').hide()
		$('form section').eq(index).show()

	$('.searchitem-business a').on 'click', ->
		$('.wrapper-shadow').show()
		$('.searchmodal-business').show()

	$('.searchitem-job a').on 'click', ->
		$('.wrapper-shadow').show()
		$('.searchmodal-job').show()

	$('.searchitem-area a').on 'click', ->
		$('.wrapper-shadow').show()
		$('.searchmodal-area').show()

