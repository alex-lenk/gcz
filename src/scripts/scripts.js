$(document).ready(function () {

    // Different events
    $(".search-area__button").hover(
        function () {
            $('.search-area').addClass("search-area__active");
        }
    );

    $(".nav-products__next .icon-next").click(
        function () {
            $('.nav-products').toggleClass("nav-products__active");
        }
    );

    $(".burger-menu-activate").click(
        function () {
            $('.burger-menu-activate').toggleClass("icon-cancel");
            $('.nav-sidebar').toggleClass("nav-sidebar-show");
        }
    );

    $('#news-carousel').owlCarousel({
        items: 1,
        smartSpeed: 450,
        loop: true
    });

    // Кнопка вверх
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        $('#toTop').click(function () {
            $('body,html').animate({scrollTop: 0}, 800);
        });
    });
});
