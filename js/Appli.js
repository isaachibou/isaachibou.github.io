
$( document ).ready(function() {	
	 
    facebook("facebookafacebbbookabookface");
}); 



 
 

function facebook (s) {
	/* Get a collection of all the indices of the string "face" in the input */
	var faces = findFacesAndBooks(s, "face");

	/* Same thing for "book" */
	var books = findFacesAndBooks(s, "book");

	/* Compute the number of strings started with "face" & ending with "book" */
	var occ = findFacebookStrings(s, faces, books);

	/* Display of the result */
    console.log(occ);
}

function findFacesAndBooks(s, forb) {
	var indices = [];
	var index;
	/* offset represents all the forb substrings deleted from the original string */
	var offset = 0;

	/* while there is an occurence of forb in the string */
	while(s.indexOf(forb) != -1)
	{
		/* find the occurence & store its start index offseted */
		index = s.indexOf(forb);
		indices.push(index + offset);

		/* delete the occurence from the string */
		s = s.replace(s.slice(index, index + 4), "");

		/* update the offset for indices consistency */
		offset += 4;
	}

	return indices;
}

function findFacebookStrings (s, f, b) {
	var l = f.length;
	var ll = f.length;
	var occ = 0;
	var j = 0;

	/* simply compute all the possiblities with the two index arrays */
	for(var i=0;i<l;i++)
	{
		for(j=0; j<ll; j++)
		{
			/* just check if "face" is before "book" in the string */
			if(f[i] < b[j])
			{
 
				occ++;
			}
		}
	}

	return occ;
}