$('document').ready(function() {
    $('#mission-div').css({'height': $('#mission-card-body').outerHeight( true )});
});

$( window ).resize(function() {
	$('#mission-div').css({'height': $('#mission-card-body').outerHeight( true )});
});