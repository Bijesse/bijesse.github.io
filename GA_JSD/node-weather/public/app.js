$(document).ready(function(){
//hits endpoint and sends response back
  $.ajax({
  url: '/geo',
  type: 'GET',
  success: function (response) {
    console.log(response);
  },
  error: function (xhr) {
    console.log(xhr);
  }
});

});
