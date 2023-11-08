$("#back-btn-top").click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
});
$("#forward-btn-top").click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
});



//Bottom carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});


$("#back-btn").click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
});
$("#forward-btn").click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
});