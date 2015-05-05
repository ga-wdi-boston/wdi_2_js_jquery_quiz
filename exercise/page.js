function convertFtoC (tempF) {
    var celTemp;
    //farTemp = document.getElementById('temp-f').value;
    return (tempF - 32) * 5/9;
}

function convertCtoF (tempC) {
    return tempC * 9/5 + 32;
}

$('#convert-to-c').click(function() {
  convertFtoC();
})

$
