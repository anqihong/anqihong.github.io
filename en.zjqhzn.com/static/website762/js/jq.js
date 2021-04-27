$(document).ready(function() {
    $(".swiper-banner").css('height', window.innerHeight);
    $('.se5_part .swiper-slide').mouseenter(function() {
        $('.se5_part .swiper-slide').removeClass('act');
        $(this).addClass('act')
    });
    $(".nav li").mouseenter(function() {
        $(this).find(".nav1").slideDown();
        $(".nav li").not(this).find(".nav1").hide()
    }).mouseleave(function() {
        $(this).find(".nav1").hide()
    });
    $('.nav_tel').click(function() {
        $(".nav_ul").slideToggle()
    });
    $(".nav1_part").mouseenter(function() {
        $(this).find(".nav2").fadeIn();
        $(".nav1_part").not(this).find(".nav2").hide()
    });
    $(".nav1_part").mouseleave(function() {
        $(this).find(".nav2").slideUp()
    });
    $(".product_nav_li").mouseenter(function() {
        $(this).find(".left_er").slideDown();
        $(".product_nav_li").not(this).find(".left_er").hide()
    }).mouseleave(function() {
        $(this).find(".left_er").hide()
    })
});
window.onload = function() {
    (function banner() {
        var mySwiper = new Swiper('.swiper-banner',{
            simulateTouch: false,
            effect: 'fade',
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        })
    }
    )();
    (function se3banner() {
        var mySwiper = new Swiper('.swiper-se3',{
            simulateTouch: false,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            hashNavigation: {
                watchState: true,
            },
        })
    }
    )();
    (function se4banner() {
        var mySwiper = new Swiper('.se4-swiper',{
            simulateTouch: false,
            slidesPerView: 8,
            spaceBetween: 40,
            loop: true,
            autoplay: true,
            navigation: {
                nextEl: '.se4_bt_next',
                prevEl: '.se4_bt_prev',
            },
            breakpoints: {
                800: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1150: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1600: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
            },
        })
    }
    )();
    (function se5banner() {
        var mySwiper = new Swiper('.se5_swiper',{
            simulateTouch: false,
            slidesPerView: 1,
            slidesPerGroup: 3,
            slidesPerColumn: 3,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }
    )();
    (function se5banner() {
        var mySwiper = new Swiper('.swiper-honor',{
            slidesPerView: 5,
            spaceBetween: 50,
            loop: true,
            navigation: {
                nextEl: '.swiper-about2-next',
                prevEl: '.swiper-about2-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1150: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            },
        })
    }
    )()
}
;
window.onscroll = function() {
    var nav_h = $(".header").height();
    if ($(document).scrollTop() > nav_h) {
        $(".header").css("background", "rgba(0, 100, 185, 0.8)")
    } else {
        $(".header").css("background", "none")
    }
}
;