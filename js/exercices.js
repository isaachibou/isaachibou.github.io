function Load() {
	 console.log('Let\'\s get this started\n');
	 Ex1();
	 Ex2();
}

function Ex1() {
	
	/* Instantiation of the HTML recipients */
	instanciateSeq();

	a = 0;
	b = 1;
	
	console.log("100 first Fib Sequence");
	var seq = customFibonacci(a, b, 100);
	console.log(seq);

	/* Requisite for the next sequence so we do not have to re-compute the preceding numbers*/
	var l = seq.length;
	a = seq[l-1];
	b = seq[l-2]; 
	console.log(a);

	fillSeq(seq);
}


function instanciateSeq() {
	for(var i = 0; i < 100; i++)
	{
		/* Creation of 100 HTMML <p> tags to receive the fibonnaci numbers */
	    var element = document.createElement("span");
	    element.setAttribute("id", "n" + i);
	    element.setAttribute("class", "fibNum");
	    document.getElementById('numbers').appendChild(element);
	}
}

function fillSeq(seq) {
	/* We divide an HSL color using the hue to make them different to the eye but still close to each other: like a rainbow */
	var colors = [];
	for(i = 0; i < 360; i += 360 / 100) {
	   // HSLColor c;
	    var hue = i;
	    var saturation = 90;
	    var lightness = 50;

	    colors.push([hue, saturation, lightness]);
	}
	console.log(colors[1]);

	/* We fill the pre-instantiated <p> tags with the sequence calculated using the colos generated */
	for (var i =0; i < 100; i++)
	{
		var element = document.getElementById("n" + i);
		element.innerHTML = seq[i];
		if(i == 0) {   element.style.color = "#000";	}
		else if(i == 99) { element.style.color = "#FFF"; }
		else { element.style.color = "hsl(" + colors[i][0] + "," + colors[i][1] + "%," + colors[i][2] + "%)"; }
	}
}

function nextSeq() {
	console.log("\n100 next Fib Sequence");
	var seq = customFibonacci(a, b, 100);
	console.log(seq);

	/* Requisite for the next sequence so we do not have to re-compute the preceding numbers*/
	var l = seq.length;
	a = seq[l-1];
	b = seq[l-2];

	fillSeq(seq);
}

function customFibonacci(a, b, n) {
	var seq = [];
	var t;
	var i = 0;
	if(a == 0) {
		seq.push(a);
		seq.push(b);
		i += 2;
	}

	for(var j=i; j<n; j++)
	{
		t = a;
		a = b;
		b +=t;
		seq.push(b);
	}	

	return seq;
}

function Ex2() 
{
	element = document.getElementById("auto");
	element.checked = false;
}

function AutomaticMode()
{

	element = document.getElementById("auto")
	if(element.checked)
	{
		Timer = setInterval(function () {Next();}, 3000); 
	}
	else
	{
		clearInterval(Timer);
	}
}

function Prev() {
	 
	var x = document.getElementsByClassName("card");
	var i;
	for (i = 0; i < x.length; i++) {
		if(hasClass(x[i],"ghost"))
	    {
	    	x[i].classList.remove("ghost");
	    	x[i].classList.add("left");
	    }
	    else if(hasClass(x[i],"left"))
	    {
	    	x[i].classList.remove("left");
	    }
	    else if(hasClass(x[i],"right"))
	    {
	    	x[i].classList.remove("right");
	    	x[i].classList.add("ghost");
	    }
	    else
	    {
	    	x[i].classList.add("right");
	    }
	}
}

function Next() {
	var x = document.getElementsByClassName("card");
	var i;
	for (i = 0; i < x.length; i++) {
		if(hasClass(x[i],"ghost"))
	    {
	    	x[i].classList.remove("ghost");
	    	x[i].classList.add("right");
	    }
	    else if(hasClass(x[i],"left"))
	    {
	    	x[i].classList.remove("left");
	    	x[i].classList.add("ghost");
	    }
	    else if(hasClass(x[i],"right"))
	    {
	    	x[i].classList.remove("right");
	    }
	    else
	    {
	    	x[i].classList.add("left");
	    }
	}
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}