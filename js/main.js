$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: '<button class="btn prevBtn"><i class="bi bi-chevron-left"></i></button>',
    nextArrow: '<button class="btn nextBtn"><i class="bi bi-chevron-right"></i></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
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