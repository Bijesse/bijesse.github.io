$(document).ready(function(){
  
  $("#sing-button").click(function(){
  for(var i = 99; i>-1; i--){
    
    if(i>1){
      $('#bottles').append('<li class = "bottle">'+ i +" bottles of beer on the wall");
    }
    else if(i===1){
      $('#bottles').append('<li class = "bottle">'+ i +" bottle of beer on the wall");
    }
    else{
      $('#bottles').append('<li class = "bottle">'+ "no more bottles of beer on the wall");
    }
  }; 
  });


});