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
					
	$(document).on 'click touched', (event)->
		ww = $(window).width()
		if ww < 768 && !$(event.target).closest('.globalnav').length
			console.log('test')
			$('.globalnav input').prop('checked', false)

	#selectbox
	$('select').on 'change', ->
		selection = $(this).find('option:selected').text()
		labelFor = $(this).attr('id')
		label = $('[for=\'' + labelFor + '\']')
		label.find('.label-desc').html selection
		if selection == "都道府県"
			label.find('.label-desc').addClass('default')
		else
			label.find('.label-desc').removeClass('default')
		return
	
	$('.btn-zip').on 'click', ->
		AjaxZip3.zip2addr('zip','','pref','city')
		
		
		