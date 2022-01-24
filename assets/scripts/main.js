$('.burger').click(function(event) {
    $('aside').addClass('aside-active')
    setTimeout(function() {
        $('nav').addClass('nav-active')
    }, 300)
    $('.blackout_layer').show()

    $('html, body').css({
        overflow: 'hidden'
    });
})

$('.close-aside').click(function(event) {
    $('aside').removeClass('aside-active')
    $('nav').removeClass('nav-active')
    $('.blackout_layer').hide()

    $('html, body').css({
        overflow: 'auto'
    });
})

$('.open_modal').click(function() {
    $('.blackout_layer').show()
    $('aside').removeClass('aside-active')
    $('nav').removeClass('nav-active')
    $('.modal_outer').css({
        display: 'flex'
    })
    setTimeout(function() {
        $('.modal').addClass('modal-active')
    }, 300)

    $('html, body').css({
        overflow: 'hidden'
    });
})

$('.close_popup').click(function() {
    $('.modal').removeClass('modal-active')
    setTimeout(function() {
        $('.blackout_layer').hide()
        $('.modal_outer').hide()
    }, 400)
    $('html, body').css({
        overflow: 'auto'
    });
})

$('.fixed-left').click(function() {
    window.scrollTo(0, 0);
})

$(window).scroll(function(){
    $('.header').toggleClass('header-fixed', $(this).scrollTop() > 1000);
    $('.fixed-left').toggleClass('fixed-left-fixed', $(this).scrollTop() > 3000);
});

const select1 = new CustomSelect('.input_changer__mobile');

$('.policy').click(function() {
    let input = $(this)
    let submit = input.parent().parent().parent().children(".submit_form")
    if (input.is(':checked')){
        submit.attr("disabled", false);
    } else {
        submit.attr("disabled", true);
    }
})


$(document).ready(function() {
    $('#about').children('.about__inner').children().css("display", "none")
    $('#about').children('.about__inner').children(":first").css("display", "inline-block")

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

$(".about_btn").click(function(e) {
    e.preventDefault()
    let parent = $(this).parent()
    if(!parent.hasClass('about_opened')) {
        parent.children('.about__inner').children().css("display", "inline-block");
        $(this).html('закрыть <i></i>')
        parent.addClass('about_opened')
    } else {
        parent.removeClass('about_opened')
        $('#about').children('.about__inner').children().css("display", "none")
        $('#about').children('.about__inner').children(":first").css("display", "inline-block")
        $(this).html('подробнее о компании  <i></i>')
    }
})

$('.btn_partners').click(function(e) {
    e.preventDefault()
    if($('.partners').hasClass('partners_active')) {

        $('.partners').children().each((index, elem) => {
            if(index >= 8) {
                elem.className = "hide"
            }
        })
        $(this).html('показать все 24 партнера')
        $('.partners').removeClass('partners_active')

    } else {
        $('.partners').children().each((index, elem) => {
            elem.className = ""
        })
        
        $(this).html('закрыть')
        $('.partners').addClass('partners_active')
    }
})


$('.input_changer__list').click(function() {
    let index = $(this).attr("data-index")
    const parent = $(this).parent().parent().children('.input_outer').children().children()
    $(this).parent().children().removeClass('active')
    $(this).addClass('active')
    parent.removeClass('active')
    parent[index].className = "active"
})

$('.select__option').click(function() {
    let index = $(this).attr('data-index')
    const parent = $(this).parent().parent().parent().parent().children('.input_outer').children().children()
    parent.removeClass('active')
    parent[index].className = "active"
})


const swiper = new Swiper('.garanty-body', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        1200: {
            slidesPerView: 3
        }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.garanty_navigate__next',
      prevEl: '.garanty_navigate__prev',
    },
});
  
const swiper_utp = new Swiper('.swiper-utp', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 40,
    loop: false,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        1200: {
            slidesPerView: 3
        },
        1440: {
            spaceBetween: 30
        }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.utp_navigate__next',
      prevEl: '.utp_navigate__prev',
    },
});

const swiper_sert = new Swiper('.sertificate-body', {
    // Optional parameters
    slidesPerView: 6,
    spaceBetween: 30,
    loop: false,
    breakpoints: {
        0: {
            spaceBetween: 20,
            slidesPerView: 2
        },
        640: {
            spaceBetween: 20,
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 30
        }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.sertificate_navigate__next',
      prevEl: '.sertificate_navigate__prev',
    },
});



$('#form, #form_1').submit(function(e) {
    e.preventDefault();
})


$('.close_thanks, .btn_thanks').click(function(e) {
    e.preventDefault();
    $('.modal-thanks_outer').css('display', 'none')
    $('html, body').css({
        overflow: 'auto'
    });
    $('.blackout_layer').hide()
})

$('.bubble').click(function(e) {
    e.preventDefault()
    $('a.mail').toggleClass('active')
    $('a.phone').toggleClass('active')
    $(this).toggleClass('active')
})

$('.btn_cookie').click(function(e) {
    e.preventDefault()
    let parent = $(this).parent()
    parent.addClass('cookie_hidden')
    setTimeout(function() {
        parent.addClass('cookie_hidden__disabled')
    }, 600)
})

$('.close_popup__event').click(function() {
    $('html, body').css({
        overflow: 'auto'
    });
    $('.event_popup').css('top', '40px')
    $('.event_popup').css('opacity', '0')
    setTimeout(function() {
        $('.blackout_layer').hide()
        $('.event_popup__outer').hide()
    }, 400)
})