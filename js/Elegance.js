$( document ).ready(function() {

	/* Window Events */
	$(window).resize(function() {
		foldMenu();
	});

	/* Animations */
	welcome();
	
	/* Nav Develop on click */
	$( '#nav_trigger' ).click(function() {
		handleMenu();
	}); 

 	/* Experiences */
 	calendar();
 	events();
	
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

function calendar() {

	/* Years */
	$( '#Years .year' ).mouseenter(function() {	
 		if( !( $(this).hasClass('datyear') ) )
 		{
 			$(this).toggleClass('disyear');
 		}
 	});

 	$( '#Years .year' ).mouseleave(function() {
 		$('#Years .year').each(function() {
 			if( $(this).hasClass('disyear') )
 			{
 				$(this).toggleClass('disyear');
 			}
 		});
 		 
 	});

 	$( '#Years .year' ).click(function() {
 		 $('#Years .year').each(function() {
 			if( $(this).hasClass('datyear') )
 			{
 				$(this).toggleClass('datyear');
 			}
 		});
 		$(this).toggleClass('datyear');
 	});

 	/* Months */
 	$( '#Months .month' ).mouseenter(function() {	
 		if( !( $(this).hasClass('datmonth') ) )
 		{
 			$(this).toggleClass('dismonth');
 		}
 	});

 	$( '#Months .month' ).mouseleave(function() {
 		$('#Months .month').each(function() {
 			if( $(this).hasClass('dismonth') )
 			{
 				$(this).toggleClass('dismonth');
 			}
 		});
 		 
 	});

 	$( '#Months .month' ).click(function() {
 		 $('#Months .month').each(function() {
 			if( $(this).hasClass('datmonth') )
 			{
 				$(this).toggleClass('datmonth');
 			}
 		});
 		$(this).toggleClass('datmonth');
 	});
}

function events() {
 
	$('#xpcover').mouseenter(function() {
		$('#xpcover').css('opacity','0');
	});

	$('.primcom').mouseleave(function() {
		$('#xpcover').css('opacity','1');
	});

	/*
	$('.primcom').mouseenter(function () {
		$('#locationLabel').toggleClass('hidden');
		$('.etq').toggleClass('hidden');
		$('.primcontent').toggleClass('hidden');
	});
*/
}