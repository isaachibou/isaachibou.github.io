$( document ).ready(function() {

	/* Handle window  resize */
	$(window).resize(function() {
		foldMenu();
	});

	/* Animations */
	welcome();
	
	/* Nav Develop on click */
	$( "#nav_trigger" ).click(function() {
		handleMenu();
	}); 

	/* Nav Links Scrolling */

	/* Time Pad */
	$( "#TimeDrag" ).draggable({ axis: "x" });
	
});

function welcome() {
	$('#OverBack').css('width','74%');
	$('#OverBack').css('left','26%');
}

function handleMenu() {
	$( "#menu" ).toggleClass('RightAngle');
		if( $( "#menu" ).hasClass('RightAngle') ) {

			$('#dropdown .eph').each(function() {

				$(this).css({
					'visibility': 'visible',
					'opacity': '1',
					'margin-top': '1px'					
				});

				var h = 7*60 + 5 *1;

				$('#nav_trigger').css('height',h);

			});
		}
		else {
			/* Reset to normal */
			$('#dropdown .eph').each(function() {
				$('#nav_trigger').css('height','100%');
				$(this).css({
					'visibility': 'hidden',
					'opacity': '0',
					'margin-top': '10%'					
				});
			});
	}
}

function foldMenu() {
	if( $( "#menu" ).hasClass('RightAngle') )
	{
		$( "#menu" ).toggleClass('RightAngle');		
	}
	$('#dropdown .eph').each(function() {
				$('#nav_trigger').css('height','100%');
				$(this).css({
					'visibility': 'hidden',
					'opacity': '0',
					'margin-top': '10%'					
				});
	});
}