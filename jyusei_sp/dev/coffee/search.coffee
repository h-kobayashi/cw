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

	$('.searchmodal-area form section nav li').on 'click', ->
		areatype = $(this).attr('class')
		$('.searchmodal-area form section').hide()
		$('.searchmodal-area form section#' + areatype).show()
		
	$('.searchmodal section fieldset:first-of-type h5').addClass('opened')
	$('.searchmodal section fieldset h5').on 'click', ->
		$('.searchmodal fieldset h5').removeClass('opened')
		$(this).addClass('opened')
	
	$('.searchitems__header a').on 'click', ->
		changetype = $(this).attr('class')
		$('.main').hide()
		$('.searchmodal').hide()
		$('.search__wrapper').show()
		$('.searchmodal#' + changetype).fadeIn()
		$('.searchmodal form section:first-of-type').show()
		$('body,html').animate { scrollTop: 0 }, 100

		