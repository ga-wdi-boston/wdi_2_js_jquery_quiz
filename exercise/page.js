function convertFtoC (tempF) {
    return (tempF - 32) * 5/9;
}

function convertCtoF (tempC) {
    return tempC * 9/5 + 32;
}



$(document).ready(function(){
$('#convert-to-c').click(function(){

var userCelsiusInput = $('#degreeC').val();
var userFahrenheitInput = $('#degreeF').val();
var calculatedCelsiusToFahrenheit = convertCtoF(userCelsiusInput);
var calculatedFahrenheitToCelsius = convertFtoC(userFahrenheitInput);
$('#convertedTempToC').html(calculatedFahrenheitToCelsius);
$('#convertedTempToF').html(calculatedCelsiusToFahrenheit);
});
})
