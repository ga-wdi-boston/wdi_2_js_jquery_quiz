function convertFtoC (tempF) {
    return (tempF - 32) * 5/9;
}

function convertCtoF (tempC) {
    return tempC * 9/5 + 32;
}

$('#convert-to-c').click(function convertFtoC() {

  var textInput= $('input[name="temp-c"]').val();
  var ftoC = convertFtoC(textInput);
})

$('#convert-to-f').click(function convertCtoF() {
  var inputText=$('input[name="temp-f"]').val();
  var ctoF = convertCtoF(inputText);
})

