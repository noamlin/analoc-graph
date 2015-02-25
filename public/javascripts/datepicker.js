$(function() {
    $( "#from" ).datepicker({
        defaultDate: new Date(2015, 1, 8),
        minDate: new Date(2015, 1, 1),
        maxDate: new Date(2015, 1, 28),
        changeMonth: true,
        numberOfMonths: 1,
        dateFormat: 'yy-mm-dd',
        onClose: function( selectedDate ) {
            $( "#to" ).datepicker( "option", "minDate", selectedDate );
        }
    });
    $( "#to" ).datepicker({
        defaultDate: new Date(2015, 1, 8),
        minDate: new Date(2015, 1, 1),
        maxDate: new Date(2015, 1, 28),
        changeMonth: true,
        numberOfMonths: 1,
        dateFormat: 'yy-mm-dd',
        onClose: function( selectedDate ) {
            $( "#from" ).datepicker( "option", "maxDate", selectedDate );
        }
    });
});