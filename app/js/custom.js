/*===============Скрипт счётчика цифр==============*/

$(document).ready(function () {
    var show = true;
    var countbox = ".numbers__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.numbers__number').css('opacity', '1');
            $('.numbers__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });
});

/*===============Скрипт прокрутки вверх==============*/

  $(document).ready(function(){
    $("a[href*='#menu']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});

/*===============Скрипт активной ссылки в меню==============*/

$(document).ready(function(){
    $('.t-nav__items li a').each(function () {
        var location = window.location.href;
        var link = this.href; 
        if(location == link) {
            $(this).addClass('active');
        }
    });
});
