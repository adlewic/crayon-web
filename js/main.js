$(document).ready(function() {
	$('#fullpage').fullpage({

		// Navegacion
	//Navegación
	menu: '#menu',
	lockAnchors: false,
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['slide1', 'slide2'],
	showActiveTooltip: false,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',

	//Desplazamiento
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	normalScrollElementTouchThreshold: 5,
	bigSectionsDestination: null,

	//Accesibilidad
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Diseno
	controlArrows: true,
	verticalCentered: true,
	sectionsColor : ['#fff', '#fff'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

	//Selectores personalizados
	sectionSelector: '.section',
	slideSelector: '.slide'
	

	
	});
});
