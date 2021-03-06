var imageData = {};
    // imageData.contentSrc;
function getImages(){
	$.ajax({
		method: "GET",
		dataType: "json",
		url: "http://www.brooklynmuseum.org/opencollection/api/oai.pmh.php?api_key=Cd3V0ow1u6",
		
		headers: { "Content-Type": "application/json"},//this is a security thing and SHOULD be looked up later; is an object as well which you can see from the {}
		success: function(data){
			imageData = data;
            buildGallery();		},
		error: function(request, error, response){ //this is for when things go wrong as they will since we don't have access to the server today
			assignBackUp();
		}
	})
};

function assignBackUp(){
	imageData = [
    {
              "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_001_PS4.jpg",
              "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_001_PS4.jpg",
              "credit": "Brooklyn Museum photograph",
              "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
              "caption": " The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
            },
            {
              "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_010_PS4.jpg",
              "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_010_PS4.jpg",
              "credit": "Brooklyn Museum photograph",
              "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
              "caption": " The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
            },
            {
              "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_009_PS4.jpg",
              "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_009_PS4.jpg",
              "credit": "Brooklyn Museum photograph",
              "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
              "caption": " The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
            },
            {
              "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_008_PS4.jpg",
              "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_008_PS4.jpg",
              "credit": "Brooklyn Museum photograph",
              "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
              "caption": " The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
            },
            {
              "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_007_PS4.jpg",
              "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_007_PS4.jpg",
              "credit": "Brooklyn Museum photograph",
              "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
              "caption": " The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013 ",
            },
            {
              "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_006_PS4.jpg",
              "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_006_PS4.jpg",
              "credit": "Brooklyn Museum photograph",
              "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
           	  "caption": " The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
            },
            {
              "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_005_PS4.jpg",
              "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_005_PS4.jpg",
              "credit": "Brooklyn Museum photograph",
              "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
              "caption": " The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
            },
            {
              "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_004_PS4.jpg",
              "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_004_PS4.jpg",
              "credit": "Brooklyn Museum photograph",
              "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
              "caption": " The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
            },
            {
              "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_003_PS4.jpg",
              "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_003_PS4.jpg",
              "credit": "Brooklyn Museum photograph",
              "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
              "caption": " The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
            },
    ]; //this closes the array of data
    buildGallery();
}

function buildGallery(){ //this builds all the images
    // for(var x=0; x<imageData.length; x++)
        $('#imgTry').attr('src', imageData[0].uri);
      captionInfo();
};

function captionInfo(){
        $('#oldCaption').append(imageData[0].caption + ', ' + imageData[0].credit);
};
getImages(); 
