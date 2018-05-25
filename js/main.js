$(document).ready(function() {
	
	$('#fullpage').fullpage({
	  anchors: ['onepage', 'twopage', 'threepage', 'fourpage', 'fivePage'],
	  menu: '#menu',
	  continuousVertical: true,
		verticalCentered: false,
		scrollingSpeed: 1500,
		easing: 'easeInOutCubic'

	});
});
