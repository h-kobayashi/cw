jQuery(document).ready ($) ->

	#search_tab
	searchTab = $('.search_tab h3')
	searchTab.on 'click',this, ->
	    if !$(this).hasClass('selected')
	    	tabCls = $(this).attr('class')
	    	searchTab.removeClass('selected')
	    	$('.block_search>section').removeClass('selected')
	    	$(this).addClass('selected')
	    	$('.block_search>section.' + tabCls).addClass('selected')

  #dialog
  $('.location a').on 'click',this, ->
    $('.dialog').dialog({
      modal: true,
      buttons: {
        "許可しない": ->
          $(this).dialog('close')
        "OK": ->
          $(this).dialog('close')
      }
    })


