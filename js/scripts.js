$('.mini-menu').click(function () {
    if (!$('nav ul').hasClass('active')) {
        $('nav ul').addClass('active');
    }
});

$('.back').click(function () {
    $('nav ul').removeClass('active');
});

$('.service-slider').slick({
    arrows: false,
    dots: true
});