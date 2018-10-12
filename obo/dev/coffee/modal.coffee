jQuery(document).ready ($) ->
	
	# keep
	$('.wrapper-shadow-keep').hide()
	$('.keepmodal').hide()

	$('.wrapper-shadow-keep').on 'click', (event)->
		$('.wrapper-shadow-keep').fadeOut()
		$('.keepmodal').fadeOut()

	$('.btn-keep').on 'click', ->
		$('.wrapper-shadow-keep').show()
		$('.keepmodal').show()
	
	# kodawari
	$('.wrapper-shadow-kodawari').hide()
	$('.kodawarimodal').hide()

	$('.wrapper-shadow-kodawari').on 'click', (event)->
		if !$(event.target).closest('.kodawarimodal').length
			$('.kodawarimodal').fadeOut()
			$('.wrapper-shadow-kodawari').fadeOut()
			$('body').removeClass('underwrapper')
	$('.wrapper-shadow-kodawari .btn-close').on 'click', ->
			$('.kodawarimodal').fadeOut()
			$('.wrapper-shadow-kodawari').fadeOut()
			$('body').removeClass('underwrapper')

	$('.btn-kodawari').on 'click', ->
		$('.wrapper-shadow-kodawari').show()
		$('.kodawarimodal').show()
		$('body').addClass('underwrapper')

	$('.kodawari-part').hide()
	$('.kodawari-full').hide()
	
	$('.kodawarimodal .type-select li span').on 'click', ->
		index = $('.kodawarimodal .type-select li span').index(this)
		$('.kodawarimodal section').hide()
		$('.kodawarimodal section').eq(index).show()
		$('.kodawarimodal .type-select li span').removeClass('selected')
		$(this).addClass('selected')
