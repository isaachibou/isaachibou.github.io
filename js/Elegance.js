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
 	eventcover();
 	getEvent('2010m1');
	
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
 		$("#HeroTimeline .xpcover").css('opacity','1');
 		$('#HeroTimeline .xpdetails').css('opacity','0');

 		 $('#Months .month').each(function() {
 			if( $(this).hasClass('datmonth') )
 			{
 				$(this).toggleClass('datmonth');
 			}
 			if( $(this).hasClass('demmonths') )
 			{
 				$(this).toggleClass('demmonths');
 			}
 			if( $(this).hasClass('startmonth') )
 			{
 				$(this).toggleClass('startmonth');
 			}
 		});
 		$(this).toggleClass('datmonth');

 		$('#Years .year').each(function() {
	 	if( $(this).hasClass('datyear') )
	 	{
	 	 	id = $(this).attr('id').substring(2,6);
	 	}
 		});

	 	id = id + $(this).attr('id');
	 	getEvent(id);
 	});
}

function eventcover() {
/*	$('.xpcover').click(function() {
		$('.xpcover').css('opacity','0');
		$('.xpdetails').css('z-index','999');
		$('.xpdetails').css('opacity','1');
	});

	$( '#Months .month' ).mouseenter(function() {
 		$('.xpcover').css('opacity','1');
		$('.xpdetails').css('z-index','1');
		$('.xpdetails').css('opacity','0');
 	});
*/
	$('.xpcover').click(function() {
		$('.xpcover').toggleClass('minixpcover');
		$('.locationLabel').toggleClass('hidden');
		$('.xpdetails').css('opacity','1');
	});
/*
	$( '#Months .month' ).mouseenter(function() {
 		$('.xpcover').css('opacity','1');
 		$('.xpcover').css('width','83.3333%');
		$('.xpcover').css('height','60%');
		$('.xpcover').css('padding-left','21px');
		$('.locationLabel').css('opacity',1);
		$('.xpdetails').css('z-index','1');
		$('.xpdetails').css('opacity','0');
 	});
*/
}

function getEvent(id) {
	var k = id.substring(4,6);
	var s = parseInt(k.substring(1,2));
	var iddef;	 

	for( var j=s+1; j<13; j++)
	{
		if( $('#'+id+'m'+j ).length != 0) {
			iddef = id+'m'+j;
			break;
		}
	}


	$("#HeroTimeline .primcom").each(function() {
		if( !($(this).hasClass('hidden')) )
		{
			$(this).toggleClass('hidden');
		}
	});

	$('#'+ iddef).toggleClass("hidden");

	var e = iddef.substring(6,8);

	$('#' + k).toggleClass('startmonth');
	 

	e = parseInt(e.substring(1,2));

	for(j=s+1; j<e+1; j++)
	{
		$('#' + 'm' +j).toggleClass('demmonths');
	}
}