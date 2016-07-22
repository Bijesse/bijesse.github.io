
window.onload = function(){
  console.log("loads second");
};

console.log("loads first");

// line 6 will run before line 3 since onload waits until everything is loaded

var hi = document.getElementById('hello');

hi.innerHTML = 'this rocks';
//console.log(hi);


var newP = document.querySelector('p');
console.log(newP);

var lists = document.querySelectorAll('li');
console.log(lists);

var button = document.getElementById("my-button").onclick = function(e){
  //console.log(e);
  var userType = document.getElementById("my-input").value;
  console.log(userType)
};


//Will automatically place a string in the input field
//document.getElementById("my-input").value = "sup fucker";