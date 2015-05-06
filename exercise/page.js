function convertFtoC (tempF) {
    return (tempF - 32) * 5/9;
}

function convertCtoF (tempC) {
    return tempC * 9/5 + 32;
}

function setBackground(){
  var tempInC = $('input[name="temp-c"]').val();
  if(tempInC < 0){
    $('body').css("background-color", "purple");
  } else if(tempInC < 10){
    $('body').css("background-color", "blue");
  } else if(tempInC < 20){
    $('body').css("background-color", "yellow");
  } else if(tempInC < 30){
    $('body').css("background-color", "orange");
  } else if(tempInC >= 30){
    $('body').css("background-color", "red");
  }
}

$(document).ready(function(){

$("#convert-to-c").click(function(){
  console.log("firing");
  var fInput = $('input[name="temp-f"]').val();
  var converted = convertFtoC(fInput);
  $('input[name="temp-c"]').val(converted);
  setBackground();
});


$("#convert-to-f").click(function(){
  console.log("firing");
  var cInput = $('input[name="temp-c"]').val();
  var converted = convertCtoF(cInput);
  $('input[name="temp-f"]').val(converted);
  setBackground();
});


});



