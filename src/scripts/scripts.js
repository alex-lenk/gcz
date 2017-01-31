$(document).ready(function () {

    // Different events
    var line__input = $('.search-line__input'),
        searchArea = $('.search-area'),
        searchActive = "search-area__active";

    $(".search-area__button").click(
        function () {
            searchArea.removeClass('is-home-search').addClass(searchActive);
            line__input.focus();
        }
    );
    line__input.focusout(
        function () {
            searchArea.removeClass(searchActive);
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

    $(".fancybox").fancybox({
        tpl: {
            closeBtn: '<a title="Close" class="fancybox-item fancybox-close close close-air icon-cancel" href="javascript:;"></a>',
            next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span class="icon-next"></span></a>',
            prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span class="icon-preview"></span></a>'
        }
    });

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

    $('#news-carousel').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('input[name="phone"]').inputmask('+7 999 999 9999');
});
