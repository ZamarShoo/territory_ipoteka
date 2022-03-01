var slider = document.getElementById("size_credit__range");
var output = document.getElementById("size_credit");
output.innerHTML = `${makeMoney(slider.value)} ₽`;
document.getElementById("per_vznos__range").setAttribute("max", document.getElementById("size_credit__range").value);
percent()

slider.oninput = function() {
    output.innerHTML = `${makeMoney(this.value)} ₽`;
    document.getElementById("per_vznos__range").setAttribute("max", this.value);
    percent()
}

var slider1 = document.getElementById("srok__range");
var output1 = document.getElementById("srok");
output1.innerHTML = `${makeMoney(slider1.value)} лет`;

slider1.oninput = function() {
    output1.innerHTML = `${makeMoney(this.value)} лет`;
}

var slider2 = document.getElementById("per_vznos__range");
var output2 = document.getElementById("per_vznos");
output2.innerHTML = `${makeMoney(slider2.value)} ₽`;

slider2.oninput = function() {
    output2.innerHTML = `${makeMoney(this.value)} ₽`;
    percent()
}

function percent() {
    var percent = document.getElementById("percent");
    let val = Math.round((document.getElementById("per_vznos__range").value * 100) / document.getElementById("size_credit__range").value)

    percent.innerHTML = `${val}%`;

}

function makeMoney(n) {
    return n.toString().split('').reverse().join('') 
    .match(/\d{0,3}/g).join(' ')
    .split('').reverse().join('').trim()
}

$('.rasschet_wrapper__left--type_ul li').click(function(e) {
    e.preventDefault()
    $(this).parent().children().removeClass('active')
    $(this).addClass('active')
    $(this)[0].dataset.id
})