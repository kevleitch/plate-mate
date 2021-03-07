$(document).ready(function(){
	$('.show-search-form').click(function(e) {
		$('#search-form').removeClass('hide-search').addClass('show-search');
		e.preventDefault();
	});
	$('.hide-search-form').click(function(e) {
		$('#search-form').addClass('hide-search').removeClass('show-search');
		e.preventDefault();
	})
});