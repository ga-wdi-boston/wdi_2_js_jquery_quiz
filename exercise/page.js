function convertFtoC (tempF) {
    return (tempF - 32) * 5/9;
}

function convertCtoF (tempC) {
    return tempC * 9/5 + 32;
}


$(document).ready(function(){
  var far;
  var cel;
  $('convert-to-c').click(function() {
    far = $('input[name="temp-f"]').val();
    cel = convertFtoC(far);
    $('input[name="temp-c"]').val(cel);
  });
  $('convert-to-f').click(function() {
    cel = $('input[name="temp-c"]').val();
    far = convertCtoF(far);
    $('input[name="temp-f"]').val(far);
  });
});
