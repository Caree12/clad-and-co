var name,
	title,
	year,
	medium,
	size;

$(document).ready(function(){

	$(window).scroll(function(e){
    	parallax();
	});
});

$('.contactEmail').submit(function(event){
	event.preventDefault();
	reset($(this));
});

$('.captionBtn').on('click', function(){ 
		name = getName();
		title = getTitle();
		year = getYear();
		medium = getMedium();
		size = getSize();
		var caption = name + ", '" + title +  "', " + year + ", " + medium + ", " + size;		 

		writeCaption(caption); 
		reset($(this));
}); //on click 



function parallax(){
	var scrolled = $(window).scrollTop();
    //console.log(scrolled);
    //$('#bgContainer').css('top', -(scrolled * .2) + 'px');
}

$('.contact').on('click', function(){
	$('.mainText').slideUp("slow");
	$('.slide').slideUp("slow");
	$('.bgPost').slideUp("slow");	
}); //.on for slide

$('form').mouseover(function(){
	$('h2').css("color", "#f7f064");
	$('.postEmail').addClass("show");
});

$('form').mouseout(function(){
	$('h2').css("color", "#1b2331");
});



function getName(){
  			return $('.artistName').val(); 
		};

function getTitle(){
  			return $('.title').val(); 
		};

function getYear(){
  			return $('.year').val(); 
		};

function getMedium(){
  			return $('.medium').val(); 
		};

function getSize(){
  			return $('.size').val(); 
		};

function writeCaption(caption){
		$('.oldCaption').hide();
		$('.messageArea').html("<p>" + caption + "</p>");
		};

function reset($form){  //$form here could be any word like pony, but it references the form tag!
	$form.find('input, textarea').val(''); //this puts the value of input fields to an empty string or ''
};

//function carouselImg(){
	//this will give the user a choice of which img they want to change to on the Try It page
// };




