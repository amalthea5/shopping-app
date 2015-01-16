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
$('li').on('click', function() {
	$(this).remove();
});
$('li').on('click', function() {
	$(this).remove();
});

//toggle class from active to check
$('.list').on('click', '.xbutton', function() {
	event.stopPropagation();
  $(this).closest ('li').toggleClass('check');
  
});
	
});