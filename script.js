$(function() {
    $('.header-menuToggle input').on('click', () => {
        const $headerMenu = $('.header-menu');
        $headerMenu.toggleClass('shown');

        if (!$headerMenu.hasClass('shown')){
            $('ul.header-menu').hide();
            $('#menu-default').show();
        }
    })

    $('.show-catalog').on('click', () => {
        $('ul.header-menu').hide();
        $('#menu-catalog').show();
    });

    $('.show-viagra').on('click', () => {
        $('ul.header-menu').hide();
        $('#menu-viagra').show();
    });

    $('.show-kamagra').on('click', () => {
        $('ul.header-menu').hide();
        $('#menu-kamagra').show();
    });

    $('.show-levitra').on('click', () => {
        $('ul.header-menu').hide();
        $('#menu-levitra').show();
    });

    $('.show-cialis').on('click', () => {
        $('ul.header-menu').hide();
        $('#menu-cialis').show();
    });

    $('.show-default-menu').on('click', () => {
        $('ul.header-menu').hide();
        $('#menu-default').show();
    });

    if (window.innerWidth > 640){
        $('.slider_second').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            adaptiveHeight: true,
            arrows: true,
            prevArrow: "<img class='carousel-slider-img' src='images/carousel-arr-l.png' alt='arrow'>",
            nextArrow: "<img class='carousel-slider-img' src='images/carousel-arr-r.png' alt='arrow'>",
            responsive: [
                {
                    breakpoint: 1240,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: false,
                        adaptiveHeight: true,
                        arrows: true,
                        prevArrow: "<img class='carousel-slider-img' src='images/carousel-arr-l.png' alt='arrow'>",
                        nextArrow: "<img class='carousel-slider-img' src='images/carousel-arr-r.png' alt='arrow'>",
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,
                        adaptiveHeight: true,
                        arrows: true,
                        prevArrow: "<img class='carousel-slider-img' src='images/carousel-arr-l.png' alt='arrow'>",
                        nextArrow: "<img class='carousel-slider-img' src='images/carousel-arr-r.png' alt='arrow'>",
                    }
                },
            ],
        });
    }

    if (window.innerWidth > 640){
        $('.slider_three').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            adaptiveHeight: true,
            arrows: true,
            prevArrow: "<img class='carousel-slider-img' src='images/carousel-arr-l.png' alt='arrow'>",
            nextArrow: "<img class='carousel-slider-img' src='images/carousel-arr-r.png' alt='arrow'>",
            responsive: [
                {
                    breakpoint: 1240,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        adaptiveHeight: true,
                        arrows: true,
                        prevArrow: "<img class='carousel-slider-img' src='images/carousel-arr-l.png' alt='arrow'>",
                        nextArrow: "<img class='carousel-slider-img' src='images/carousel-arr-r.png' alt='arrow'>",
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        adaptiveHeight: true,
                        arrows: true,
                        prevArrow: "<img class='carousel-slider-img' src='images/carousel-arr-l.png' alt='arrow'>",
                        nextArrow: "<img class='carousel-slider-img' src='images/carousel-arr-r.png' alt='arrow'>",
                    }
                },
            ],
        });
    }

    if (window.innerWidth > 1140) {

        $(window).scroll(
            {
                previousTop: 0
            },
            function () {
                var currentTop = $(window).scrollTop();
                if (currentTop < this.previousTop) {
                    $(".sidebar em").text("Up"); /* optional for demo */
                    $(".header").show();
                } else {
                    $(".sidebar em").text("Down");
                    $(".header").hide();
                }
                this.previousTop = currentTop;
            });
    }
});
