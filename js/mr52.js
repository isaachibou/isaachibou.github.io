$( document ).ready(function() {
	l_egalize();

	/* Window Events */
	$(window).resize(function() {
		foldMenu();
		l_egalize();
	});

	/* Nav Develop on click */
	$( '#nav_trigger' ).click(function() {
		handleMenu();
	}); 

});

 

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

function l_egalize() {

	/* Check how many nests each row bears */
	$('#Intro .row').each(function() {
		var n=0;
		$(this).children('.nest').each(function() { 
			n++;
		});

		/* each nest within a row fits the height of his tallest neighbour */
		if(n > 1)
		{
			var hmax = 0;
			
			/* each nest */
			$(this).children('.nest').each(function() { 
				/* Find tallest nest */
				if(hmax < $(this).height()) { hmax = $(this).height(); }
			});

			/* Apply it to its neighbours */
			$(this).children('.nest').each(function() { 
				if($(this).height() != hmax)  { $(this).height(hmax); }
			});

			/* Still got issues with legend  
			$(this).children('.nest').each(function() { 
				if( $(this).has(".imnet").length) 
				{
					alert('im: ' + $(this).height());
					var h = $(this).children('.imnet').height();;
					$(this).children('.legnet').css('max-height',hmax-h-5 +'px');
				}
			});*/

			 
					
		}
 	});
}

