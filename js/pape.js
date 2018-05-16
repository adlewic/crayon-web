$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu: true,
        direction: 'horizontal',
        verticalCentered: true,
        sectionsColor: ['#ffffff','ccc000','ccc222'],
        anchors: ['page1,page2'],
        scrollingSpeed: 900,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,
	});
});