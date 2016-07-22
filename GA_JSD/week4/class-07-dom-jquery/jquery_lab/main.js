/* Independent Practice

Making a favorites list: jQuery

You'll add the ability to complete tasks in your favorite things list. Your program must complete the following rules:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing").
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through).
- Each new item added by the user needs to also have the "complete task" link at the end.

*/

$(document).ready(function(){
  $("#new-thing-button").click(function(e){
    e.preventDefault();
      var userType = $("#new-thing").val();
      console.log(userType);
    $("#fav-list").append("<li>"+userType+"</li>");
  });



});
