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