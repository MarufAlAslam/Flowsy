AOS.init();

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
                dots: false
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



$('.slider1').slick({
    dots: false,
    infinite: true,
    speed: 5000,
    cssEase: 'linear',
    // arrows: true,
    autoplay: true,
    autoplaySpeed: 0,
    // prevArrow: '<button class="btn prevBtn"><i class="bi bi-chevron-left"></i></button>',
    // nextArrow: '<button class="btn nextBtn"><i class="bi bi-chevron-right"></i></button>',
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
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


$('.radioBtn').click(function () {
    $('.radioBtn .radio-custom').removeClass('active');
    $(this).children('.radio-custom').addClass('active');
})


var x = 0


$('.audioPlayer').click(function () {

    if (x == 1) {
        // $('.audioPlayer').click(function () {
        x = 0
        var audio = document.getElementById("audio");
        audio.pause();
        $('.audioPlayer').html('<i class="bi bi-play-circle-fill me-2"></i> Play Teaser')
        // })
    }
    else {
        // $('.audioPlayer').click(function () {
        var audio = document.getElementById("audio");
        audio.play();
        $('.audioPlayer').html('<i class="bi bi-pause-circle-fill me-2"></i> Pause Teaser')
        x = 1
        // })
    }
})





// $('.navbar-toggler').click(function () {
//     $('this').toggleClass('active');
//     $('.navbar.navbar-expand-lg.bg-dark.py-3.navbar-dark.rounded-pill').toggleClass('active')
//     $('.top-nav').toggleClass('active')
// })


$('.premium label').click(function () {
    $('.premium label').removeClass('active')
    $(this).addClass('active')
})

$('.navbar-toggler').click(function () {
    $('.mobileMenu').toggleClass('active')
    $(this).toggleClass('active')
})

$('.btn.newMenuCloser').click(function () {
    $('.mobileMenu').removeClass('active')
})

