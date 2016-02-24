//IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function() {
  //the function gets immediately executed and the advantage is the variables don't 
  //   get into the global scope or be global var so they can only be accessed within this function

  //BEST PRACTICE TO WRAP ALL YOUR JS IN ONE OF THESE
}) ();



(function(App) {  //passing App in as a parameter
  function getImages(){
  	$.ajax({
  		method: "GET",
  		dataType: "json",
  		url: "http://www.brooklynmuseum.org/opencollection/api/oai.pmh.php?api_key=Cd3V0ow1u6",
  		
  		headers: { "Content-Type": "application/json"},//this is a security thing and SHOULD be looked up later; is an object as well which you can see from the {}
  		success: function(data){
        buildGallery(data);	//this passes the data straight into the function without having to use a var	
      },
  		error: function(request, error, response){ //this is for when things go wrong as they will since we don't have access to the server today
  			assignBackUp();
  		}
  	})
  };

  function assignBackUp(){
  	
    var imageData = [
      {
                "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_001_PS4.jpg",
                "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_001_PS4.jpg",
                "credit": "Brooklyn Museum photograph",
                "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
                "caption": "1 The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
              },
              {
                "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_010_PS4.jpg",
                "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_010_PS4.jpg",
                "credit": "Brooklyn Museum photograph",
                "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
                "caption": "2 The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
              },
              {
                "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_009_PS4.jpg",
                "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_009_PS4.jpg",
                "credit": "Brooklyn Museum photograph",
                "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
                "caption": "3 The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
              },
              {
                "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_008_PS4.jpg",
                "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_008_PS4.jpg",
                "credit": "Brooklyn Museum photograph",
                "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
                "caption": "4 The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
              },
              {
                "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_007_PS4.jpg",
                "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_007_PS4.jpg",
                "credit": "Brooklyn Museum photograph",
                "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
                "caption": "5 The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013 ",
              },
              {
                "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_006_PS4.jpg",
                "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_006_PS4.jpg",
                "credit": "Brooklyn Museum photograph",
                "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
             	  "caption": "6 The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
              },
              {
                "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_005_PS4.jpg",
                "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_005_PS4.jpg",
                "credit": "Brooklyn Museum photograph",
                "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
                "caption": "7 The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
              },
              {
                "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_004_PS4.jpg",
                "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_004_PS4.jpg",
                "credit": "Brooklyn Museum photograph",
                "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
                "caption": "8 The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
              },
              {
                "uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size2\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_003_PS4.jpg",
                "thumb_uri": "http:\/\/cdn2.brooklynmuseum.org\/images\/opencollection\/exhibitions\/size0\/DIG_E_2013_Bruce_High_Quality_Foundation_Ode_to_Joy_003_PS4.jpg",
                "credit": "Brooklyn Museum photograph",
                "description": "The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013. [06\/28\/2013 - 09\/22\/2013]. Installation view.",
                "caption": "9 The Bruce High Quality Foundation: Ode to Joy, 2001\u20132013, June 28, 2013 through September 22, 2013",
              },
      ]; //this closes the array of data
      buildGallery(imageData); 
  }

  function buildGallery(imageData){ //this builds all the images
      for(var x=0; x<imageData.length; x++) //loops through all the images and stops at 9
          $('.imgTry').attr('src', imageData[x].uri);  //this line would throw a refernce error if this function happened before our AJAX call, BE AWARE OF THIS PITFALL
        captionInfo(imageData);
  };

  function captionInfo(imageData){
        var x = 0;
          // for(var x=0; x<imageData.length; x++)
          $('.oldCaption').append(imageData[x].caption + ', ' + imageData[x].credit);


  };
  getImages(); 

  App.bulidGallery = buildGallery;
  App.captionInfo = captionInfo;  //this is a REFENCE TO THE FUNCTION AND NOT CALLING IT; ALSO it makes the func captionInfo accessible to main.js since main.js is called after api.js in my html <script> tags
}) (  window.App = window.App || {} );  //this is defining the name space on teh global object and saying IF the window.App already exists take it otherwise create a new empty object
 //WE DON'T WANT TO RECREATE THE WINDOW.APP NAMESPACE EACH TIME SO IF IT EXISTS ELSEWHERE THIS FINDS IT AND USES WHAT WE ALREADY HAVE
