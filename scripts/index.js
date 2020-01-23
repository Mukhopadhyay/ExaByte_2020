$(document).ready(function () {
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: false,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 280,
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
    $('.logo-container').tilt({
        maxTilt: 60,
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
        speed: 300,    // Speed of the enter/exit transition.
        transition: true,   // Set a transition on enter/exit.
        disableAxis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,   // If the tilt effect has to be reset on exit.
        glare: true,  // Enables glare effect
        maxGlare: 1
    })
});