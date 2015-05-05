// function convertFtoC (tempF) {
//     return (tempF - 32) * 5/9;
// }

// function convertCtoF (tempC) {
//     return tempC * 9/5 + 32;
// }

$('convert-to-c').click(function(){
  function convertFtoC (tempF) {
    return (tempF - 32) * 5/9;
  }
  /*Use purple for temperatures below freezing*/
  if (convertFtoC < 0){
    $("body").css({"backgroundColor": "purple"});
  }
  /*Use blue for temperatures between 0-10*/
  if (convertFtoC > 0 && convertFtoC < 10){
    $("body").css({"backgroundColor": "blue"});
  }
  /*yellow for temperatures between 10 C and 20 C*/
  if (convertFtoC > 10 && convertFtoC < 20){
    $("body").css({"backgroundColor": "yellow"});
  }
  /*orange for temperatures between 20 C and 30 C*/
  if (convertFtoC > 20 && convertFtoC < 30){
    $("body").css({"backgroundColor": "orange"});
  }
  /*red for temperatures above 30 C*/
  if (convertFtoC > 30){
    $("body").css({"backgroundColor": "red"});
  }
}





$('convert-to-f').click(function(){
  function convertCtoF (tempC) {
      return tempC * 9/5 + 32;
  }
  /*Use purple for temperatures below freezing*/
  if (convertCtoF < 32){
    $("body").css({"backgroundColor": "purple"});
  }
  /*Use blue for temperatures between 0-10*/
  if (convertCtoF > 32 && convertCtoF < 50){
    $("body").css({"backgroundColor": "blue"});
  }
  /*yellow for temperatures between 10 C and 20 C*/
  if (convertCtoF > 50 && convertCtoF < 68){
    $("body").css({"backgroundColor": "yellow"});
  }
  /*orange for temperatures between 20 C and 30 C*/
  if (convertCtoF > 68 && convertCtoF < 86){
    $("body").css({"backgroundColor": "orange"});
  }
  /*red for temperatures above 30 C*/
  if (convertCtoF > 86){
    $("body").css({"backgroundColor": "red"});
  }
}
