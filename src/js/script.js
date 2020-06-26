$(document).ready(function(){
    $('ul.therapy__tabs').on('click', 'li:not(.therapy__tab_active)', function() {
        $(this)
          .addClass('therapy__tab_active').siblings().removeClass('therapy__tab_active')
          .closest('div.container').find('div.therapy__content').removeClass('therapy__content_active').eq($(this).index()).addClass('therapy__content_active');
      });

    $('.doctors__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/section_4/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/section_4/right.png"></button>'
    });    
});

