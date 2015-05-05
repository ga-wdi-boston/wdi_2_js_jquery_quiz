function convertFtoC (tempF) {
    return (tempF - 32) * 5/9;
}

function convertCtoF (tempC) {
    return tempC * 9/5 + 32;
}

$(document),ready(function(){
  $('#convert-to-c').click(function(){
    var f = $('input[name="temp-f"]').val();
    var c = convertFtoC(f);
    $('input[name="temp-c"]').val(c);

    if (c < 0) {
      $('body').css('background-color', 'purple');
    } else if (c < 10) {
        $('body').css('background-color', 'blue');
    } else if (c < 20) {
        $('body').css('background-color', 'yellow');
    } else if (c < 30) {
        $('body').css('background-color', 'orange');
    } else {
        $('body').css('background-color', 'red');
    }
  });

  $('#convert-to-f').click(function(){
    var c = $('input[name="temp-c"]').val();
    var f = convertCtoF(c);
    $('input[name="temp-f"]').val(f);

    if (c < 0) {
      $('body').css('background-color', 'purple');
    } else if (c < 10) {
        $('body').css('background-color', 'blue');
    } else if (c < 20) {
        $('body').css('background-color', 'yellow');
    } else if (c < 30) {
        $('body').css('background-color', 'orange');
    } else {
        $('body').css('background-color', 'red');
    }
  });

});
