$(document).ready(function(){
    var messageAppReference = firebase.database();

  $("#message-form").submit(function(e){
    e.preventDefault();
    var thePost = $("#message").val();
    //console.log(thePost);
    var messagesReference = messageAppReference.ref('messages');

    messagesReference.push({
      message: thePost,
      votes: 0
    });

    $('#message').val('');
  });

  function getFanMessages() {
  messageAppReference.ref('messages').on('value', function (results) {
    $(".message-board").empty();
    results.forEach(function(msg) {
      var id = msg.key;

      var message = msg.val();
      var messageText = message.message;
      var messageVotes = message.votes;
      var $li = $('<li>');
      // create up vote element
      var $upVoteElement = $('<i class="fa fa-thumbs-up pull-right"></i>');

      $upVoteElement.on('click', function () {
        updateMessage(id, ++messageVotes);
      });

      // create down vote element
      var $downVoteElement = $('<i class="fa fa-thumbs-down pull-right"></i>');

      $downVoteElement.on('click', function () {
        updateMessage(id, --messageVotes);
      });

      // create delete element
      var $deleteElement = $('<i class="fa fa-trash pull-right delete"></i>');

      $deleteElement.on('click', function () {
        deleteMessage(id);
      });



      $li.text(messageText);

      // add voting elements to $li
      $li.append($upVoteElement);
      $li.append($downVoteElement);

      //append delete element
      $li.append($deleteElement);

      //render vote count
      $li.append('<div class="pull-right">' + messageVotes + '</div>');


      $(".message-board").append($li);
      console.log($li);

    });
  });
}
function updateMessage (id, messageVotes) {
  // find message whose objectId is equal to the id we're searching with
  var messageReference = messageAppReference.ref('messages/' + id);

  // update votes property
  messageReference.update({
    votes: messageVotes
  });
}
//Deletes messageVotes
function deleteMessage(id){
  var messageReference = messageAppReference.ref('messages/' + id);

  messageReference.remove();
}
//kicks app off
getFanMessages();
});
