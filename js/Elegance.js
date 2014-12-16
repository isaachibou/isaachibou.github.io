$( document ).ready(function() {	

	/* Window Events */
	$(window).resize(function() {
		foldMenu();
	});

	welcome();	
	timeline();

 	$(window).bind('scroll', function(e) {
 		parallaxpourri();
 	});

 	pertinentMonths("2010");
 	
});


function welcome() {

	/* Nav Develop on click */
	$( '#nav_trigger' ).click(function() {
		handleMenu();
	}); 

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

function timeline() {
	/* Need to be called on resize events */

	/* Calendar interactions */
	calendar();

	/* Cube Setup */
	cubeIt();

 	/* Slider Setup */
 	cubeSlider();
}

function calendar () {	
	/* On year selection */
	$(".year").click(function() {
		/* Unselect all */
		$(".year").each(function() {
	    	if($(this).hasClass("datyear"))
	    	{
	    		$(this).toggleClass("datyear");
	    	}
		});
		/* Highlight chosen */
		$(this).toggleClass("datyear");
	});

	/* On month selection */
	$(".month").click(function() {
		/* Is this month clickable ? */
		if($(this).hasClass("pertinentmonth"))
		{
			/* Unselect all */
			$(".month").each(function() {
				if($(this).hasClass("datmonth"))
				{
					$(this).toggleClass("datmonth");
				}
			});
			/* Highlight chosen */
			$(this).toggleClass("pertinentmonth");
			$(this).toggleClass("datmonth");
		}
	});

}

function pertinentMonths(id) {
	$("#HeroTimeline #xpnav a").each(function() {
		if( $(this).attr('id').substring(0,4) == id ) {
			var pert = $(this).attr("id").substring(4,7);
			if( !($('#' + pert).hasClass('pertinentmonth')) )
			{
				$('#' + pert).toggleClass('pertinentmonth');
			}
		}
	});
}

function cubeIt() {

	var w = $('#XPHop').width();
	
	$('#XPHop').css('transform','rotateY(-90deg) translateX('+-w+'px) ');

	/* Cube Rotation Trigger */
	$( '.togglemode' ).click(function() {
		/* Button Animation*/
		$('.togglecursor').toggleClass("toggleleft");
		$('.togglecursor').toggleClass("toggleright");

		/* Behaviour Save*/
		if( $('.togglecursor').hasClass("toggleright"))
		{
			$('#XPCubeContainer').css('transform','translateX('+w/2+'px) rotateY(90deg)');
		}
		if( $('.togglecursor').hasClass("toggleleft"))
		{
			$('#XPCubeContainer').css('transform','initial');
		}
 	}); 
}	
 
function cubeSlider() {
	/* Dynamic slide height */
	var h = $('#xpslider').height();
 	$('.slide').css('height', h + "px");
 	//$('.slide').css('background-position','0 '+ -50 +'px');

 	$("#xpslider").scroll(function() { 
 		var scrolledY = $("#xpslider").scrollTop();
 		var by = scrolledY / 6 - 100;
 		$('#slide0').css('background-position','0 '+ by +'px');
 		$('#slide1').css('background-position','0 '+ by+'px'); 
 		console.log(scrolledY/6 -100);
 	});
}

function parallaxpourri() {
	var scrolledY = $(window).scrollTop();
	/*
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