function convertFtoC (tempF) {
    return (tempF - 32) * 5/9;
}

function convertCtoF (tempC) {
    return tempC * 9/5 + 32;
}

function changeBackground(tempC) {
  switch (tempC) {

    case tempC<0:
      $('#center').addClass('below-freezing');
      break;
    case 0<tempC<10:
      $('#center').addClass('cold');
      break;
    case 10<tempC<20:
      $('#center').addClass('lukewarm');
      break;
    case 20<tempC<30:
      $('#center').addClass('warm');
      break;
    case 30<tempC:
      $('#center').addClass('hot');
      break;
  }
}


//Test temperature to add/remove class


$(document).ready(function(){

  $('#convert-to-c').click(function() {
    var tempToConvert = $('#temp-f').val();
    if (typeof(tempToConvert)!==undefined){
      $('#temp-c').val(convertFtoC(tempToConvert));
    } else {
      alert ('You have not entered a number');
    }


  });

  $('#convert-to-f').click(function() {
    var tempToConvert = $('#temp-c').val();
    if (typeof(tempToConvert)!==undefined){
      $('#temp-f').val(convertCtoF(tempToConvert));
    } else {
      alert ('You have not entered a number');
    }


  });


});
