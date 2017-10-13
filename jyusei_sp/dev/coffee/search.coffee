jQuery(document).ready ($) ->
	
	$('.search__wrapper').hide()
	$('.searchmodal').hide()
	$('.searchmodal form section').hide()
	
	$('.searchmodal .close-btn').on 'click', ->
		$('.search__wrapper').hide()
		$('.searchmodal').fadeOut()
		$('.searchmodal form section').hide()
		$('.main').show()
	
	$('.searchbtn-area a').on 'click', ->
		index = $('.searchbtn-area a').index(this)
		$('.main').hide()
		$('.searchmodal').hide()
		$('.search__wrapper').show()
		$('.searchmodal').eq(index).fadeIn()
		$('.searchmodal form section:first-of-type').show()
		$('body,html').animate { scrollTop: 0 }, 100

	$('.searchmodal-area > nav li').on 'click', ->
		index = $('.searchmodal-area > nav li').index(this)
		$('.searchmodal-area form section').hide()
		$('.searchmodal-area form section').eq(index).show()
		
	$('.searchmodal fieldset:first-of-type h5').addClass('opened')
	$('.searchmodal fieldset h5').on 'click', ->
		$('.searchmodal fieldset h5').removeClass('opened')
		$(this).addClass('opened')