$(document).ready(function () {

    // Different events
    $(".search-area__button").click(
        function () {
            $('.search-area').removeClass('is-home-search').addClass("search-area__active");
        }
    );

    $("#for-chickens").click(
        function () {
            $('.nav-products').toggleClass("nav-products__active");
        }
    );

    $(".close-bar-sub-menu").click(
        function () {
            $('.nav-products').toggleClass("nav-products__active");
        }
    );

    $(".burger-menu-activate,.close-bar-menu").click(
        function () {
            $('.burger-menu-activate').toggleClass("icon-cancel");
            $('.nav-sidebar').toggleClass("nav-sidebar-show");
        }
    );

    $('#news-carousel').owlCarousel({
        items: 1,
        loop: true
    });

    $('.modalResourcesCarousel').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        smartSpeed: 450,
        navText: ['<span class="icon-preview"></span>','<span class="icon-next"></span>']
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

    $(".fancybox").fancybox();
});
