$(window).on('load', function () {
    $('.preloader').delay(50).fadeOut('slow');
});

$(window).scroll(function(){
    $('.header').toggleClass('header-fixed', $(this).scrollTop() > 1000);
    $('.fixed-left').toggleClass('fixed-left-fixed', $(this).scrollTop() > 3000);
});

const select1 = new CustomSelect('.input_changer__mobile');

$(document).ready(function() {
    $('#about_inner').children('.about__inner').children().css("display", "none")
    $('#about_inner').children('.about__inner').children(":first").css("display", "inline-block")

    $('.partners').children().each((index, elem) => {
        if(index >= 8) {
            elem.className = "hide"
        }
    })

    setTimeout(function() {
        $('h1').css('opacity', '1')
    }, 600)

    setTimeout(function() {
        $('.cookie1').addClass('cookie_visible')
    }, 3000)

    setTimeout(function() {
        $('.cookie2').addClass('cookie_visible')
    }, 3600)

    setTimeout(function() {
        $('.event_popup__outer').css('display', 'flex')
        $('.blackout_layer').show()

        $('html, body').css({
            overflow: 'hidden'
        });
    }, 20000)

    setTimeout(function() {
        $('.event_popup').css('top', '0')
        $('.event_popup').css('opacity', '1')
    }, 20050)

})