$(document).ready(function(){
    $('ul.therapy__tabs').on('click', 'li:not(.therapy__tab_active)', function() {
        $(this)
          .addClass('therapy__tab_active').siblings().removeClass('therapy__tab_active')
          .closest('div.container').find('div.therapy__content').removeClass('therapy__content_active').eq($(this).index()).addClass('therapy__content_active');
      });
});
