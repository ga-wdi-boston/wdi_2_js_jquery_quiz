var convertFtoC = function(tempF) {
    return (tempF - 32) * 5/9;
}

var convertCtoF = function (tempC) {
    return tempC * 9/5 + 32;
}



$(document).ready(function() { //not done
  $('#convert-to-c').click(function() {
    var userSelectF = $('input[name="temp-f"]').val();
    convertFtoC


 }

}

$(document).ready(function() { //not done
  $('#convert-to-f').click(function() {
    var userSelectC = $('input[name="temp-c"]').val();
    convertCtoF
 }

}
