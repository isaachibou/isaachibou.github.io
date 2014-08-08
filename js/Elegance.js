$( document ).ready(function() {

	/* Animations */
	$('#OverBack').css('width','74%');
	$('#OverBack').css('left','26%');
	
	/* Nav Develop on click */
	$( "#nav_trigger" ).click(function() {

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
	}); 

	/* Nav Links Scrolling */
	
});

function Order(mode) {

	 
} 

 