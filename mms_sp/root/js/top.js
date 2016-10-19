(function() {
  jQuery(document).ready(function($) {
    var searchTab;
    searchTab = $('.search_tab h3');
    searchTab.on('click', this, function() {
      var tabCls;
      if (!$(this).hasClass('selected')) {
        tabCls = $(this).attr('class');
        searchTab.removeClass('selected');
        $('.block_search>section').removeClass('selected');
        $(this).addClass('selected');
        return $('.block_search>section.' + tabCls).addClass('selected');
      }
    });
    return $('.location a').on('click', this, function() {
      return $('.dialog').dialog({
        modal: true,
        buttons: {
          "許可しない": function() {
            return $(this).dialog('close');
          },
          "OK": function() {
            return $(this).dialog('close');
          }
        }
      });
    });
  });

}).call(this);
