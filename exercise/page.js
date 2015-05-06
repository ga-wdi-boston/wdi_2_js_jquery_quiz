function convertFtoC (tempF) {
    return (tempF - 32) * 5/9;
}

function convertCtoF (tempC) {
    return tempC * 9/5 + 32;
}

function changeColor(){
  if($('input[name="temp-c"]').val() < 0){
  $('body').removeClass().addClass('purple');
}
  else if($('input[name="temp-c"]').val() < 10){
    $('body').removeClass().addClass('blue');
  }
  else if($('input[name="temp-c"]').val() < 20){
    $('body').removeClass().addClass('yellow');
  }
  else if($('input[name="temp-c"]').val() < 30){
    $('body').removeClass().addClass('orange');
  }
  else{
    $('body').removeClass().addClass('red')
  }
}

$(function(){
  $('#convert-to-c').click(function(){
    $('input[name="temp-c"]').val(convertFtoC($('input[name="temp-f"]').val()));
    changeColor();
  });

  $('#convert-to-f').click(function(){
    $('input[name="temp-f"]').val(convertCtoF($('input[name="temp-c"]').val()));
    changeColor();
  });




}
);
