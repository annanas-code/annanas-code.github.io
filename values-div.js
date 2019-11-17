$('document').ready(function() {
    $('#values-div').css({'height': $('#values-card-body').outerHeight()});
});

$( window ).resize(function() {
	$('#values-div').css({'height': $('#values-card-body').outerHeight()});
});