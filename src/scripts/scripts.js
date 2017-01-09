$(document).ready(function () {

    // Different events
    $(".search-area__button").hover(
        function () {
            $('.search-area').addClass("search-area__active");
        }
    );

    $(".navigation-products__next").click(
        function () {
            $('.navigation-products').toggleClass("navigation-products__active");
        }
    );

});
