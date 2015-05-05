function convertFtoC (tempF) {
    return (tempF - 32) * 5/9;
}

function convertCtoF (tempC) {
    return tempC * 9/5 + 32;
}

$( document ).ready(function() {

  $('#convert-to-c').click(function(e){
    var tempInput = $('input[name="temp-f"').val();
    var tempOutput = convertFtoC(tempInput);
       $('input[name="temp-c"').val(tempOutput);
       changeColor(tempOutput);


  });


  $('#convert-to-f').click(function(e){
    var tempInput = $('input[name="temp-c"').val();
    var tempOutput = convertCtoF(tempInput);
      $('input[name="temp-f"').val(tempOutput);
      changeColor(tempOutput);

  });


  function changeColor(num){
    console.log(num);
    if(num > 255){num = 255;}
    if(num < 0){num = 0;}

    $('body').css('background-color', 'rgb('+num+', 0, '+num+')');
  }

});
