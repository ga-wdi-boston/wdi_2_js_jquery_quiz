$(document).ready(function(){




function convertFtoC (tempF) {
    return (tempF - 32) * 5/9;
}

function convertCtoF (tempC) {
    return tempC * 9/5 + 32;
}


$("#convert-to-c").click(function(){


  var cInput = $('#temp-c').val();
  var converted = convertCtoF(cInput);
  $(".placeholder").html(converted.toString());
});


$("#convert-to-f").click(function(){
  var fInput = $('#temp-f').val();
  var converted = convertFtoC(fInput);
  $(".placeholder").html(converted.toString());
});


});
