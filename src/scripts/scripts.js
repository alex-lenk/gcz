$(document).ready(function () {

    // Different events
    $(".search-area__button").hover(
        function () {
            $('.search-area').addClass("search-area__active");
        }
    );

    $(".navigation-products__next .icon-next").click(
        function () {
            $('.navigation-products').toggleClass("navigation-products__active");
        }
    );

    $(".burger-menu-activate").click(
        function () {
            $('.burger-menu-activate').toggleClass("icon-cancel");
            $('.navigation-sidebar').toggleClass("navigation-sidebar-show");
        }
    );

    $('#news-carousel').owlCarousel({
        items: 1,
        smartSpeed: 450,
        loop: true
    });
});
