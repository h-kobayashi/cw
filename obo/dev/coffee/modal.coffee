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

	# sp kodawari
	$('.wrapper-condition h2 a').on 'click', ->
		$('body').removeClass('edit-condition')
	
	$('.wrapper-condition ul li a').on 'click', ->
		$(this).toggleClass('selected')
		
	# 'area', 'job', 'char1', 'char2', 'char3', 'char4', 'char5', 'char6', 'char7'
	$('.edit-area').on 'click', ->
		$('body').addClass('edit-condition')
		$('.wrapper-area').addClass('active')

	$('.edit-job').on 'click', ->
		$('body').addClass('edit-condition')
		$('.wrapper-job').addClass('active')

	$('.edit-char1').on 'click', ->
		$('body').addClass('edit-condition')
		$('.wrapper-char1').addClass('active')

	$('.edit-char2').on 'click', ->
		$('body').addClass('edit-condition')
		$('.wrapper-char2').addClass('active')

	$('.edit-char3').on 'click', ->
		$('body').addClass('edit-condition')
		$('.wrapper-char3').addClass('active')

	$('.edit-char4').on 'click', ->
		$('body').addClass('edit-condition')
		$('.wrapper-char4').addClass('active')

	$('.edit-char5').on 'click', ->
		$('body').addClass('edit-condition')
		$('.wrapper-char5').addClass('active')

	$('.edit-char6').on 'click', ->
		$('body').addClass('edit-condition')
		$('.wrapper-char6').addClass('active')

	$('.edit-char7').on 'click', ->
		$('body').addClass('edit-condition')
		$('.wrapper-char7').addClass('active')
		
	
	# policy
	$('.wrapper-shadow-policy').hide()
	$('.policymodal').hide()

	$('.policymodal .btn-close').on 'click', (event)->
		$('.wrapper-shadow-policy').fadeOut()
		$('.policymodal').fadeOut()

	$('.btn-policy').on 'click', ->
		$('.wrapper-shadow-policy').show()
		$('.policymodal').show()
	
		
