const select1 = new CustomSelect('.input_changer__mobile');

$('#kviz a.btn').click(function(e) {
    e.preventDefault()
    let index = Number($(this).attr("data-index"))
    let correct = index - 1
    console.log(correct)
    $(`#kviz_${correct}`).addClass('kviz_toHide')
    
    setTimeout(function() {
        $(`#kviz_${correct}`).addClass('kviz_hidden')
    }, 500)
})

$('#kviz a.back').click(function(e) {
    e.preventDefault()
    let index = Number($(this).attr("data-index"))
    let correct = index + 1
    console.log(correct)
    $(`#kviz_${index}`).removeClass('kviz_hidden')
    
    setTimeout(function() {
        $(`#kviz_${index}`).removeClass('kviz_toHide')
    }, 100)
})