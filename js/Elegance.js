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
 	highlightpertinents(2010);
 	unveilCubeStyle();

 	$(window).bind('scroll', function(e) {
 		parallaxpourri();
 	});
 	 
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
 	$( '#Years .year' ).click(function() {
 		 
 		id = $(this).attr('id').substring(2,6);
 		$(this).toggleClass('datyear');
 		highlightpertinents(id);
 	});

 	/* Months */
 	$( '#Months .month' ).click(function() {
 		 $('#Months .month').each(function() {
 			if( $(this).hasClass('datmonth') )
 			{
 				$(this).toggleClass('datmonth');
 			}
 			if( $(this).hasClass('demmonths') )
 			{
 				$(this).toggleClass('demmonths');
 			}
 		});

 		if( $(this).hasClass('pertinentmonth') )
 		{
 			$(this).toggleClass('datmonth');
 		}

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

function getEvent(id) {
	var k = id.substring(4,7);
	var s = parseInt(k.substring(1,3));
	var iddef;	 

	for( var j=s+1; j<13; j++)
	{
		if(j < 10) {
			if( $('#'+id+'m'+'0'+j ).length != 0) {
				iddef = id+'m'+'0'+j;
				break;
			}
		}
		else {
			if( $('#'+id+'m'+j ).length != 0) {
				iddef = id+'m'+j;
				break;
			}
		}
	}

	$("#HeroTimeline .xpdetails").each(function() {
		if( !($(this).hasClass('hidden')) )
		{
			$(this).toggleClass('hidden');
		}
	});

	$('#'+ iddef).toggleClass("hidden");

	var e = iddef.substring(8,10);
	e = parseInt(e);

	for(j=s; j<e+1; j++)
	{
		if(j < 10) { $('#' + 'm' +'0' +j).toggleClass('demmonths'); }
		else { $('#' + 'm' +j).toggleClass('demmonths'); }
	}
}

function highlightpertinents( id ) {
	$("#HeroTimeline .xpdetails").each(function() {
		if( $(this).attr('id').substring(0,4) == id )
		{
			var per = $(this).attr('id').substring(4,7);

			if( !($('#'+ per).hasClass('pertinentmonth')) )
			{
				$('#' + per).toggleClass('pertinentmonth');
			}
		}
	});
}

function unveilCubeStyle() {
	$( '#togglemode' ).click(function() {
		$('#togglecursor').toggleClass("toggleft");
		$('#togglecursor').toggleClass("toggleright");
 	}); 
}

function parallaxpourri() {
	var scrolledY = $(window).scrollTop();
	
	$('#HeroBack').css('background-position','center -'+((scrolledY*0.2))+'px');
	$('#OverBack').css('background-position','center -'+((scrolledY*0.8))+'px'); 

	$('#HeroProfil').css('background-position','center -'+((scrolledY*0.2))+'px');

	/* Figure out how to parallax without creating empty space */
	//$('#HeroProfil').css('top','-' + (scrolledY) +'px');
/*
	$('#HeroTimeline').css('background-position','center -'+((scrolledY*0.2))+'px');
	$('#HeroTimeline').css('top','-' + (scrolledY) +'px');
*/
	 


	//$('#HeroTimeline').css('background-position','center -'+((scrolledY*0.2))+'px');
	/*.css('top','-'+((scrolledY*0.5))+'px');*/
	/*$('#OverBack').css('top','-'+((scrolledY*0.5))+'px');*/
}