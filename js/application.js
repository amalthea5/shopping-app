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
		$('.list').append('<li class="active"><button class="xbutton">X</button>' + 
		$('input#item').val() + '</li>');
		$('input#item').val("");
});

//remove li by clicking on them
$('ul').on('click', '.check', function() {
	$(this).remove();
});
$('ul').on('click', '.active', function() {
	$(this).remove();
});

//toggle class from active to check
$('.xbutton').on('click', function() {
	$('.active').toggleClass('check');
});
	
});