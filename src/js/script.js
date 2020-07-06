window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    });
});

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
    $('.feedback__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/section_4/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/section_4/right.png"></button>'
    });

    //Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation'). fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation'). fadeOut('fast');
    });
    $('.button_mini').on('click', function(){
        $('.overlay, #consultation'). fadeIn('slow');
    });
    
    $(document).mouseup(function (e){
        var modalctr = $(".overlay");
        var modal = $("#consultation");
        if (!modal.is(e.target) && modal.has(e.target).length === 0){
        modalctr.hide();
        }
    });
    $('.modal-form').validate({
        rules:{
            name: {
                required: true,
                minlength: 2
              },
            phone: "required"
        },
        messages: {
            name:{
                required: "Пожалуйста, введите своё имя",
                minlength: jQuery.validator.format("Введите как минимум {0} символа!")
              },
            phone: "Пожалуйста, введите номер телефона"
          }
        });
        $('input[name=phone]').mask("+7 (999) 999-99-99");
        //pageup
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1600) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
        });

        $("a[href^='#']").click(function(){
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });
});



