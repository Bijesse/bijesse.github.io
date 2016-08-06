// Users should be able to:
// 1. Enter an item into #new-item
// 2. Submit the form #item-form (remember to prevent the form's default behavior!)
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #new-item should clear


// Bonus: Focus on #new-item after the item is added
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user
// Legendary Bonus: Remove individual <li> elements when they are clicked

// similar to window.onload
$(document).ready(function () {
	// YOUR CODE HERE
 //Init Templates Append
 var initTodos = {
  todos: [
    "data types",
    "arrays",
    "objects",
    "functions",
  ]
 }

//step 2: get template and compile using handlebars
var initSource = $("#init-template").html();
var initCompiled = Handlebars.compile(initSource);

//step 3: pass compiled template JS Object
var initTemplate = initCompiled(initTodos);

//step 4: append tmeplate to the DOM
$("#list").append(initTemplate);


//New Item Template Append

  $("#clickme").click(function(e){
    e.preventDefault();
    var input = $("#new-item").val();
    console.log(input);

  //   if(input !== ""){
  //  $("#list").append("<li>" + input + "</li>");
  //   $("#new-item").val(null);
  // }
  });

  //removes the <li> on click even if they were created dynamically
  $(document).on("click", "li", function(){
    $(this).remove();
  })
});
