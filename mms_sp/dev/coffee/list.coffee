jQuery(document).ready ($) ->

	#dialog
	$('.ddarea01').on 'click',this, ->
		$('.dialog_area01').dialog({
			width: 300,
			modal: true,
			buttons: {
				"キャンセル": ->
					$(this).dialog('close')
				"外す": ->
					$('.ddarea01').hide()
					$(this).dialog('close')
			}
		})
	$('.ddarea02').on 'click',this, ->
		$('.dialog_area02').dialog({
			width: 300,
			modal: true,
			buttons: {
				"キャンセル": ->
					$(this).dialog('close')
				"外す": ->
					$('.ddarea02').hide()
					$(this).dialog('close')
			}
		})
	$('.ddcourse').on 'click',this, ->
		$('.dialog_course').dialog({
			width: 300,
			modal: true,
			buttons: {
				"キャンセル": ->
					$(this).dialog('close')
				"外す": ->
					$('.ddcourse').hide()
					$(this).dialog('close')
			}
		})
	$('.ddfeature').on 'click',this, ->
		$('.dialog_feature').dialog({
			width: 300,
			modal: true,
			buttons: {
				"キャンセル": ->
					$(this).dialog('close')
				"外す": ->
					$('.ddfeature').hide()
					$(this).dialog('close')
			}
		})
	$('.ddarea03').on 'click',this, ->
		$('.dialog_area03').dialog({
			width: 300,
			modal: true,
			buttons: {
				"閉じる": ->
					$(this).dialog('close')
			}
		})
	$('.dialogclose').on 'click',this, ->
		$('.dialog_area03').dialog('close')

