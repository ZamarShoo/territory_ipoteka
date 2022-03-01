$(window).on('load', function () {
    $('.preloader').delay(50).fadeOut('slow');

    setTimeout(function() {
        $('h1').css('opacity', '1')
    }, 800)

    setTimeout(function() {
        $('.first-slide ul li:nth-child(1)').css('opacity', '1')
    }, 1500)

    setTimeout(function() {
        $('.first-slide ul li:nth-child(2)').css('opacity', '1')
    }, 1700)

    setTimeout(function() {
        $('.first-slide ul li:nth-child(3)').css('opacity', '1')
    }, 2000)

    setTimeout(function() {
        $('.cookie1').addClass('cookie_visible')
    }, 3000)

    setTimeout(function() {
        $('.cookie2').addClass('cookie_visible')
    }, 3600)

    if($('.event_popup__outer')) {
        setTimeout(function() {
            $('.event_popup__outer').css('display', 'flex')
            $('.blackout_layer__partner').show()
        }, 20000)
    }
    if($('.event_popup')) {
        setTimeout(function() {
            $('.event_popup').css('top', '0')
            $('.event_popup').css('opacity', '1')
        }, 20050)
    }
});

$(window).scroll(function(){
    $('.header').toggleClass('header-fixed', $(this).scrollTop() > 1000);
    $('.fixed-left').toggleClass('fixed-left-fixed', $(this).scrollTop() > 3000);
});

$(document).ready(function() {
    $('#about_inner').children('.about__inner').children().css("display", "none")
    $('#about_inner').children('.about__inner').children(":first").css("display", "inline-block")

    $('.partners').children().each((index, elem) => {
        if(index >= 8) {
            elem.className = "hide"
        }
    })
})