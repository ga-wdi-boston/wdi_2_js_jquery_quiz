var convertFtoC = function (tempF) {
    return (tempF - 32) * 5/9;
};

var convertCtoF = function (tempC) {
    return tempC * 9/5 + 32;
};



$(document).ready(function(){

  // Convert C to F, fill in F
  $('#convert-to-f').click(function(){
    var celsiusInput = $('#cBox').val();
    $('#fBox').val(Math.floor(convertCtoF(celsiusInput)));
  });

  // Convert F to C, fill in C
  $('#convert-to-c').click(function(){
    var fahrInput = $('#fBox').val();
    $('#cBox').val(Math.floor(convertFtoC(fahrInput)));
  });











});
