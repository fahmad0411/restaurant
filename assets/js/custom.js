$(document).ready(function(){
   $(".mobile-btn").click(function(){
       $(".mobile-btn").toggleClass('toggle-btn');
       $(".header-right nav").slideToggle();
   });

//    slick slider
    $(".slick-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


});
