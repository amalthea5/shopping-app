$(document).ready(function() {
	$('#item').keyup(function(event) {
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add').click();
		};
	});

$('#add').click(function() {
	event.preventDefault();
		$('.list').append('<li class="active">' + 
		$('input#item').val() + '</li>');
		$('input#item').val("");
})

	
});