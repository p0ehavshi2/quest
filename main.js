function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

// const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
const deadline = 'November 30 2020 22:00:00 GMT+0200';
initializeClock('clockdiv', deadline);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$('.info-btn').click(function () {
    $('.info-title').css('opacity', '0');
    $('.info-btn').css('opacity', '0');
    setTimeout(function () {
        $('.info-title').text('Найцікавіші пригоди починаються з таємниці');
        $('.info-title').css('opacity', '1');
        $('.info-title').css('color', '#FFCC00');

        $('.info-btn').css('display', 'none');

        $('.info-text').html('Будь готовий! Історія почнеться о 22:00. Приїдь на білому коні на місце, вказане на квитку. З собою візьми все, що тобі може знадобитися упродовж 3 днів + фотік, термочашку, ніж (бо ніколи не вгадаєш, куди заведе дорога). </br> Про все інше подбають котики. М\'яуяяяяу');
        $('.info-text').css('opacity', '1');
    }, 600);
})