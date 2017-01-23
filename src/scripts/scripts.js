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
        navText: ['<span class="icon-preview"></span>', '<span class="icon-next"></span>']
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

    $('.card-product__slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.card-product__slider-mini'
    });

    $('.card-product__slider-mini').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.card-product__slider-big',
        dots: false,
        focusOnSelect: true,
        nextArrow: '<span class="slick-next slick-arrow icon-next"></span>',
        prevArrow: '<span class="slick-prev slick-arrow icon-preview"></span>'
    });

    $('.product-purchased__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<span class="slick-next slick-arrow icon-next"></span>',
        prevArrow: '<span class="slick-prev slick-arrow icon-preview"></span>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
