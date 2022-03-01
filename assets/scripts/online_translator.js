const data = [
    {
        id: 0,
        time: '1',
        number: '№ 202451',
        price: '10 154 000',
        status: true,
        solution: [
            'в 4 банках по ставке 9,1% - 22 123 ₽/мес.',
            'в 2 банках по ставке 11,1% - 25 123 ₽/мес.'
        ]
    },
    {
        id: 1,
        time: '1',
        number: '№ 202451',
        price: '12 154 000',
        status: true,
        solution: [
            'в 4 банках по ставке 9,1% - 22 123 ₽/мес.',
            'в 2 банках по ставке 11,1% - 25 123 ₽/мес.'
        ]
    },
    {
        id: 2,
        time: '1',
        number: '№ 202451',
        price: '11 154 000',
        status: true,
        solution: [
            'в 4 банках по ставке 9,1% - 22 123 ₽/мес.',
            'в 2 банках по ставке 11,1% - 25 123 ₽/мес.'
        ]
    },
    {
        id: 3,
        time: '1',
        number: '№ 202451',
        price: '10 154 000',
        status: false,
        solution: [
            '-',
        ]
    },
]

const len = data.length

function changeTimer() {
    setTimeout(function() {

        $('.online_translator__body .table_row:nth-child(1) p:nth-child(1)').html('2 минуты назад')
        $('.online_translator__body .table_row:nth-child(2) p:nth-child(1)').html('2 минуты назад')
        $('.online_translator__body .table_row:nth-child(3) p:nth-child(1)').html('2 минуты назад')
        $('.online_translator__body .table_row:nth-child(4) p:nth-child(1)').html('3 минуты назад')
        $('.online_translator__body .table_row:nth-child(5) p:nth-child(1)').html('3 минуты назад')
        $('.online_translator__body .table_row:nth-child(6) p:nth-child(1)').html('3 минуты назад')
        
        changeTimer()
    }, 60001)
}

function initTranslator(id) {
    if (data.length !== id) {
        setTimeout(function() {
            creatRow(id)
            initTranslator(++id)
        }, 20000)
    } else {
        initTranslator(0)
    }
}

function creatRow(id) {
    const data_row = data[id]
    const data_status = data_row.status ? 'Одобрено': 'Отказано'
    data_solution = ''
    data_row.solution.map(function(elem) {
        data_solution+=`<li>${elem}</li>`
    })
    const row = `
    <div class="table_row init_row">
        <p>${data_row.time} минуту назад</p>
        <p>${data_row.number}</p>
        <p>${data_row.price} ₽</p>
        <p class="">Рассмотрение...</p>
        <ul>
            <li class="looked">
                <p>0%</p>
                <div class="dots">
                    <div class="dot dot-1"></div>
                    <div class="dot dot-2"></div>
                    <div class="dot dot-3"></div>
                </div>
            </li>
        </ul>
    </div>
    `
    firstRowWorker(row, data_status, data_solution)
}

function firstRowWorker(row, status, solution) {
    $('.online_translator__body').prepend(row)
    setTimeout(function() {
        $('.table_row.init_row').removeClass('init_row')
        var roundLogEl = document.querySelector('.online_translator__body .table_row:nth-child(1) ul p');

        anime({
            targets: roundLogEl,
            duration: 21500,
            innerHTML: ['0%', '100%'],
            easing: 'easeOutExpo',
            round: 1
        });

        var load = anime.timeline({
            easing: 'easeOutExpo',
            duration: 550,
            loop: true,
          });
          
          // Add children
          load
          .add({
            targets: ['.online_translator__body .table_row:nth-child(1) ul .dots .dot-1', '.online_translator__body .table_row:nth-child(1) ul .dots .dot-2', '.online_translator__body .table_row:nth-child(1) ul .dots .dot-3'],
            opacity: 0,
          })
          .add({
            targets: '.online_translator__body .table_row:nth-child(1) ul .dots .dot-1',
            opacity: 1,
          })
          .add({
            targets: '.online_translator__body .table_row:nth-child(1) ul .dots .dot-2',
            opacity: 1,
            delay: 150
          })
          .add({
            targets: '.online_translator__body .table_row:nth-child(1) ul .dots .dot-3',
            opacity: 1,
            delay: 200
          })
          .add({
            targets: ['.online_translator__body .table_row:nth-child(1) ul .dots .dot-1', '.online_translator__body .table_row:nth-child(1) ul .dots .dot-2', '.online_translator__body .table_row:nth-child(1) ul .dots .dot-3'],
            opacity: 0,
          });
    }, 500)
    
    setTimeout(function() {
        $('.online_translator__body .table_row:nth-child(1) p:nth-child(4)').html(status)
        $('.online_translator__body .table_row:nth-child(1) p:nth-child(4)').addClass(status === 'Одобрено' ? 'true' : 'false')
        $('.online_translator__body .table_row:nth-child(1) ul').html(solution)
    }, 16000)
}

initTranslator(0)