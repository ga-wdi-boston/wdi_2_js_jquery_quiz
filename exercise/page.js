function convertFtoC (tempF) {
    return (tempF - 32) * 5/9;
}

function convertCtoF (tempC) {
    return tempC * 9/5 + 32;
}

function setBackground(tempInC){
  if (tempInC < 0){
    $('body').css('background-color', 'purple');
  }else if (tempInC < 10){
    $('body').css('background-color', 'blue');
  }else if (tempInC < 20){
    $('body').css('background-color', 'yellow');
  }else if (tempInC < 30){
    $('body').css('background-color', 'orange');
  }else if (tempInC > 30){
    $('body').css('background-color', 'red');
  }
}


$(document).ready(function(){
  var far;
  var cel;
  $('#temp-f').keyup(function(e) {
    if (e.which == 13){
    far = $('#temp-f').val();
    cel = convertFtoC(far);
    $('#temp-c').val(cel);
    setBackground(cel);
  }
  });
  $('#temp-f').keyup(function() {
    if (e.which == 13){
    cel = $('#temp-c').val();
    far = convertCtoF(cel);
    $('#temp-f').val(far);
    setBackground(cel);
  }
  });
});
