$('.blog').hide();

$('#blog1li').click(function(){
	$('#blog1').slideToggle();
});



// $('#blog2').hide();

$('#blog2li').click(function(){
	$('#blog2').slideToggle();
});



$('#blog3').hide();

$('#blog3li').click(function(){
	$('#blog3').slideToggle();
});



$('#blog4').hide();

$('#blog4li').click(function(){
	$('#blog4').slideToggle();
});



$('#blog5').hide();

$('#blog5li').click(function(){
	$('#blog5').slideToggle();
});




$('#blog6').hide();

$('#blog16i').click(function(){
	$('#blog6').slideToggle();
});



$('#blog7').hide();

$('#blog7li').click(function(){
	$('#blog7').slideToggle();
});




$('#blog8').hide();

$('#blog8li').click(function(){
	$('#blog8').slideToggle();
});



$('#blog1').hide();

$('#blog1li').click(function(){
	$('#blog1').slideToggle();
});




$('#blog1').hide();

$('#blog1li').click(function(){
	$('#blog1').slideToggle();
});



$('input').change(function(){
	$('input').background-color('red');
});

$('#findaboardbutton').click(function(e){
	$('#surveycontainer').empty();
	$('#surveycontainer').prepend('<img class="keanupic" src="img/keanu.jpg">');
	$('#surveycontainer').prepend('<p class="keanu">Great Job!  We will be in touch shortly with next steps.</p><br><br>');
  	$('html, body').animate({scrollTop:$(document).height()}, 'slow');
  	e.preventDefault();
});

$('#findaboardbutton').click(function(e){
	$('#surveycontainer2').empty();
	$('#surveycontainer2').prepend('<img class="keanupic" src="img/keanu2.jpg">');
	$('#surveycontainer2').prepend('<p class="keanu">Great Job!  We will be in touch shortly with next steps.</p><br><br>');
  	$('html, body').animate({scrollTop:$(document).height()}, 'slow');
  	e.preventDefault();
});
