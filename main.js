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


        if(t.total <= 15000){
           $('.rotate').css('opacity', '1');
        }

        if (t.total <= 0) {
            clearInterval(timeinterval);

            $('.countdown-container').css('opacity', '0');
            setTimeout(function(){
               $('.countdown-container').css('display', 'none');
               $('.video').css('display', 'block');
               $('.video').css('opacity', '1');
            }, 500)

            $('#video').get(0).play();

            $('.rotate ').tooltip('hide');
            $('.boom ').tooltip('hide');
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

// const deadline = new Date(Date.parse(new Date()) + 18 * 1000);
const deadline = 'November 30 2020 22:00:00 GMT+0200';
initializeClock('clockdiv', deadline);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$('.info-btn').click(function () {
    $('.info-title').css('opacity', '0');
    $('.info-btn').css('opacity', '0');
    if ($(this).attr('data-info') == 'no') {
        setTimeout(function () {
            $('.info-title').html('А уже фсьо');
            
            setTimeout(function () { 
                $('.info-title').html('А уже фсьо.</br> ');
             }, 500);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо..</br> ');
             }, 1000);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо...</br> ');
             }, 1500);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А');
             }, 2500);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А н');
             }, 2700);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А на');
             }, 2600);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А над');
             }, 2750);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А надо');
             }, 3100);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А надо б');
             }, 3300);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А надо би');
             }, 3400);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А надо бил');
             }, 3430);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А надо било');
             }, 3570);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А надо било р');
             }, 3700);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А надо било ра');
             }, 3900);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А надо било ран');
             }, 4100);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А надо било рань');
             }, 4220);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А надо било раньш');
             }, 4350);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А надо било раньш');
             }, 4400);

             setTimeout(function () { 
                $('.info-title').html('А уже фсьо... </br> А надо било раньше');
             }, 4500);




            
            $('.info-title').css('opacity', '1');
            $('.info-title').css('color', '#FFCC00');

            $('.info-btn').css('display', 'none');

            $('.info-text').html('');
            $('.info-text').css('opacity', '1');
        }, 600);
    } else {
        setTimeout(function () {
            $('.info-title').text('Найцікавіші пригоди починаються з таємниці');
            $('.info-title').css('opacity', '1');
            $('.info-title').css('color', '#FFCC00');

            $('.info-btn').css('display', 'none');

            $('.info-text').html('Будь готовий! Історія стартує о 22:00. Приїдь на білому коні на місце, вказане на квитку. З собою візьми все, що тобі може знадобитися упродовж 3 днів + фотік, термочашку, ніж (бо ніколи не вгадаєш, куди заведе дорога). </br> Про все інше подбають котики. М\'яуяяяяу');
            $('.info-text').css('opacity', '1');
        }, 600);
    }
})

$(document).ready(function () {
    $('.boom-animate').click(function () {
        $('.boom-animate').removeClass('boom-animate');
    })
});

var str = 'Андрій, а що ти забув в консолі?';
var style = ['padding: 1rem 5rem;',
  'background: linear-gradient(to bottom right, #000, #454545);',
  'text-shadow: 0 2px #000;',
  'font: 1.3rem/3 Georgia;',
  'color: #fff;'].join('');

console.log ( '%c%s', style, str );