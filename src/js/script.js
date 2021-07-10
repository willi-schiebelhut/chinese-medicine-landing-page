window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu_link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active ');
            menu.classList.toggle('header__menu_active');
        });
    });

//Табы
const tabsButton = document.querySelectorAll('.therapy__tab'),
      tabsContent = document.querySelectorAll('.therapy__content'),
      tabsWrapper = document.querySelector('.therapy__tabs');

      function hideTabs() {
        tabsContent.forEach(i => {
          i.classList.add('hide', 'fade');
          i.classList.remove('show');
        });
        tabsButton.forEach(i => {
          i.classList.remove('therapy__tab_active');
        });
      }
      function showTabs(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabsButton[i].classList.add('therapy__tab_active');

      }
      
      tabsWrapper.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('therapy__tab')) {
            tabsButton.forEach((item, i) => {
                if (target == item) {
                    hideTabs();
                    showTabs(i);
                }
            });
        }
    });

//Слайдер
    $('.doctors__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/section_4/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/section_4/right.png"></button>',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                arrows: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                arrows: false
              }
            }
        ]    
    });

    $('.feedback__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/section_4/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/section_4/right.png"></button>',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              infinite: true,
              arrows: false
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              infinite: true,
              arrows: false
            }
          }
      ]
    });

    //Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation'). fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation'). fadeOut('fast');
    });
    $('#form_call').on('click', function(){
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
            $('body').removeClass('lock');
            return false;
        });

        $('form').submit(function(e) {
          e.preventDefault();
          $.ajax({
              type: "POST",
              url: "mailer/smart.php",
              data: $(this).serialize()
          }).done(function() {
              $(this).find("input").val("");
              $('#consultation').fadeOut('slow');
              $('.overlay, #thanks').fadeIn('slow');
              setTimeout(function() {
                $('.overlay, #thanks').fadeOut('slow');
              },2000);
        
              $('form').trigger('reset');
          });
          return false;
      });


    //   $(function(){
    //     $('#but').click(function(){
    //         var p = $('#quotes').children('.show');
    //         var n = $(p).next();
    //         if($(n).hasClass('quote')){
    //             $(n).removeClass('none').addClass('show');
    //         }
    //         else{
    //             var obj = $('#quotes').children('.quote');
    //             $(obj[0]).addClass('show').removeClass('none');
    //         }
    //         $(p).removeClass('show').addClass('none');
    //     });
    // });

  });


