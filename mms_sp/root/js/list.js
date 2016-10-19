(function() {
  jQuery(document).ready(function($) {
    $('.ddarea01').on('click', this, function() {
      return $('.dialog_area01').dialog({
        width: 300,
        modal: true,
        buttons: {
          "キャンセル": function() {
            return $(this).dialog('close');
          },
          "外す": function() {
            $('.ddarea01').hide();
            return $(this).dialog('close');
          }
        }
      });
    });
    $('.ddarea02').on('click', this, function() {
      return $('.dialog_area02').dialog({
        width: 300,
        modal: true,
        buttons: {
          "キャンセル": function() {
            return $(this).dialog('close');
          },
          "外す": function() {
            $('.ddarea02').hide();
            return $(this).dialog('close');
          }
        }
      });
    });
    $('.ddcourse').on('click', this, function() {
      return $('.dialog_course').dialog({
        width: 300,
        modal: true,
        buttons: {
          "キャンセル": function() {
            return $(this).dialog('close');
          },
          "外す": function() {
            $('.ddcourse').hide();
            return $(this).dialog('close');
          }
        }
      });
    });
    $('.ddfeature').on('click', this, function() {
      return $('.dialog_feature').dialog({
        width: 300,
        modal: true,
        buttons: {
          "キャンセル": function() {
            return $(this).dialog('close');
          },
          "外す": function() {
            $('.ddfeature').hide();
            return $(this).dialog('close');
          }
        }
      });
    });
    $('.ddarea03').on('click', this, function() {
      return $('.dialog_area03').dialog({
        width: 300,
        modal: true,
        buttons: {
          "閉じる": function() {
            return $(this).dialog('close');
          }
        }
      });
    });
    return $('.dialogclose').on('click', this, function() {
      return $('.dialog_area03').dialog('close');
    });
  });

}).call(this);
