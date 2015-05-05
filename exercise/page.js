function convertFtoC (tempF) {
    return (tempF - 32) * 5/9;
}

function convertCtoF (tempC) {
    return tempC * 9/5 + 32;
}

$(document).ready(function(){

  $('#convert-to-c').click(function(){
    var fToCResult = convertFtoC('#temp-f');
    $('#temp-c').html('fToCResult');
  );
    $('#convert-to-f').click(function(){
    var fToCResult = convertFtoC('#temp-f');
    $('#temp-f').html('cToFResult');
  );

  /* For colored backgrounds, use 'if' function -
 if (0 < fToCResult < 10) {addClass to body div to add a different background color.} (etc. for the other colors)
  */
}
