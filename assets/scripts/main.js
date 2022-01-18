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

$(window).scroll(function(){
    $('.header').toggleClass('header-fixed', $(this).scrollTop() > 1000);
});