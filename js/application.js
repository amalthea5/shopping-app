$(document).ready(function() {
	$('#item').keyup(function(event) {
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add').click();
		};
	});

//add li to shopping list
$('#add').click(function() {
	event.preventDefault();
		$('.list').append('<li class="active"><button class="xbutton">X</button><span class="text">' + 
		$('input#item').val() + '</span></li>');
		$('input#item').val("");
});

//remove li by clicking on them
$('.shopping-list').on('click', 'li', function() {
	$(this).remove();
});


//toggle class from active to check
$('.list').on('click', '.xbutton', function() {
	event.stopPropagation();
  $(this).closest ('li').toggleClass('check');
  
});

//reset button
$('.reset').on('click', function() {
	$('.list').empty();
});
	
});