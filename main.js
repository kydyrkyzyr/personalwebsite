$(document).ready(function(){

	$('.carousel').carousel({
		interval: 4000
	});
	$('.carousel').carousel('next');
	
	$('#ryanTabs a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	
	
});

