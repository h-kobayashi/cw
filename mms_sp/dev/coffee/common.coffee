jQuery(document).ready ($) ->

  #pagetop
  topBtn = $('.pagetop')
  topBtn.click ->
    $('body,html').animate { scrollTop: 0 }, 500
    false

  #image on/off
  $('a img').hover (->
    $(this).attr 'src', $(this).attr('src').replace('_off', '_on')
    return
  ), ->
    if !$(this).hasClass('currentPage')
      $(this).attr 'src', $(this).attr('src').replace('_on', '_off')

  #menu
  menu = $('.block_menu')
  $('.menubtn,.menuclose').on 'click',this, ->
    $(this).toggleClass('opened')
    $('.block_menu').slideToggle()
