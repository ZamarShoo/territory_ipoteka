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

$(window).scroll(function(){
    $('.header').toggleClass('header-fixed', $(this).scrollTop() > 1000);
});

const select1 = new CustomSelect('.input_changer__mobile');

$('.policy_wrapper').click(function() {
    if ($('.policy').is(':checked')){
        $(".submit_form").attr("disabled", false);
    } else {
        $(".submit_form").attr("disabled", true);
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