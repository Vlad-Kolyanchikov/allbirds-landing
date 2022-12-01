$(function () {
    $("#" + $(".radio:checked").val()).show();
    $(".radio").change(function () {
        $(".favorites__product-select").hide();
        $("#" + $(this).val()).show();
    });
});
$('label').on('click', function () {
    $(this).addClass('active')
        .siblings().removeClass('active');
})

$(document).ready(function () {
    $('.product-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrows-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrows-next.svg" alt=""></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2

                }
            },
            {
                breakpoint: 650,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});

$(document).ready(function () {
    $('.header__burger,.header__mini-burger').click(function (event) {
        $('.header__burger, .header__burger-menu, .header__mini-burger, .header__mini-burger-menu').toggleClass('active')
    })
});