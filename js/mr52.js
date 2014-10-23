$( document ).ready(function() {
	l_egalize();
});

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
			
			/* Find tallest nest */
			$(this).children('.nest').each(function() { 
				if(hmax < $(this).height()) { hmax = $(this).height(); }
			});

			/* Apply it to its neighbours */
			$(this).children('.nest').each(function() { 
				if($(this).height() != hmax)  { $(this).height(hmax); }
			});
		}
 	});
}

