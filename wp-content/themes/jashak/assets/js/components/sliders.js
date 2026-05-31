jQuery(function ($) {

    const $slider = $('.home-banner-slider');

    if ($slider.length) {

        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            infinite: true,
            speed: 1800,
            autoplay: true,
            autoplaySpeed: 6500,
            arrows: true,
            dots: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
            adaptiveHeight: false,
            prevArrow:
                '<button type="button" class="slick-prev" aria-label="Previous Slide"><i class="fa-solid fa-arrow-left"></i></button>',
            nextArrow:
                '<button type="button" class="slick-next" aria-label="Next Slide"><i class="fa-solid fa-arrow-right"></i></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    }
});


jQuery(document).ready(function ($) {

    $('.service-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        arrows: true,
        dots: false,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        cssEase: 'ease',
        prevArrow:
            '<button class="service-arrow service-prev"><i class="fa-solid fa-arrow-left"></i></button>',

        nextArrow:
            '<button class="service-arrow service-next"><i class="fa-solid fa-arrow-right"></i></button>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            }

        ]
    });

    $('.project-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2800,
        speed: 900,
        arrows: true,
        dots: false,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        prevArrow:
            '<button class="service-arrow service-prev project-prev" aria-label="Previous Project"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow:
            '<button class="service-arrow service-next project-next" aria-label="Next Project"><i class="fa-solid fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });
});

$('.testimonial-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    arrows: true,
    dots: true,
    adaptiveHeight: false,
    pauseOnHover: false,
    cssEase: 'ease',
    prevArrow:
        '<button class="service-arrow service-prev project-prev" aria-label="Previous Project"><i class="fa-solid fa-arrow-left"></i></button>',

    nextArrow:
        '<button class="service-arrow service-next project-next" aria-label="Next Project"><i class="fa-solid fa-arrow-right"></i></button>',

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: false
            }
        }
    ]
});