$(document).ready(function () {

    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: false,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 50,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['Home', 'About', 'Countdown', 'Events', 'XCryptus', 'Sponsors']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function (index, nextIndex, direction) { },
        afterLoad: function (anchorLink, index) { },
        afterRender: function () { },
    });
    // $('.logo-container').tilt({
    //     maxTilt: 60,
    //     perspective: 1000,
    //     easing: "cubic-bezier(.03,.98,.52,.99)",
    //     scale: 1, 
    //     speed: 300, 
    //     transition: true,
    //     disableAxis: null,.
    //     reset: true,
    //     glare: false,
    //     maxGlare: 1
    // })
});
/*const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

const seconds = document.getElementById('seconds'),
    minutes = document.getElementById('minutes'),
    hours = document.getElementById('hours'),
    days = document.getElementById('days');

let countDown = new Date('Feb 22, 2020 00:00:00').getTime(),
    x = setInterval(function () {

        let now = new Date().getTime(),
            distance = countDown - now;

        //Second
        if (Math.floor((distance % (minute)) / second) < 10) {
            s = '0' + Math.floor((distance % (minute)) / second);
            seconds.innerHTML = s;
        }
        else {
            seconds.innerHTML = Math.floor((distance % (minute)) / second);
        }
        //Minute
        if (Math.floor((distance % (hour)) / (minute)) < 10) {
            m = '0' + Math.floor((distance % (hour)) / (minute));
            minutes.innerHTML = m;
        }
        else {
            minutes.innerHTML = Math.floor((distance % (hour)) / (minute));
        }
        //Hour
        if (Math.floor((distance % (day)) / (hour)) < 10) {
            h = '0' + Math.floor((distance % (day)) / (hour));
            hours.innerHTML = h;
        }
        else {
            hours.innerHTML = Math.floor((distance % (day)) / (hour));
        }

        document.getElementById('days').innerText = Math.floor(distance / (day));

        //Fires the day of eXabyte            
        if (distance < 0) {
            clearInterval(x);
        }

    }, second)*/
var $carousel = $('.carousel').flickity({
    imagesLoaded: true,
    percentPosition: false,
});

var $imgs = $carousel.find('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
// get Flickity instance
var flkty = $carousel.data('flickity');

$carousel.on('scroll.flickity', function () {
    flkty.slides.forEach(function (slide, i) {
        var img = $imgs[i];
        var x = (slide.target + flkty.x) * -1 / 3;
        img.style[transformProp] = 'translateX(' + x + 'px)';
    });
});


