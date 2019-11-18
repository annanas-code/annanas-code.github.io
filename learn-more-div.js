$('document').ready(function() {
    $('#learn-more-div').css({'height': $('#learn-more-card-body').outerHeight()});
});

$( window ).resize(function() {
	$('#learn-more-div').css({'height': $('#learn-more-card-body').outerHeight()});
});