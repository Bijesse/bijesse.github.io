/*
  Please add all Javascript code to this file.
*/

// creates the items within the dropdown menu.
var dropdown = ["Digg", "Mashable", "Reddit"];
  $.each(dropdown, function(index, element){

    $('#drop').append('<li><a href = "">' + element + '</a></li>');

  });

var diggRequest = "https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json"

  $.ajax(
  {
      url: diggRequest,
      type: "GET",
      success: function (response){
        console.log(response.data.feed[0].content.title_alt);
        console.log(response.data.feed[0].content.media.images[0].original_url);

        $.each(response.data.feed, function(index, articleObj){
          var article_struct = '<article class="article">test</article>';
          var article_pic = '<section class="featuredImage">' +'<img src="'+articleObj.content.media.images[0].url+'" alt="" />' + '</section>'
          //var article_title = '<section class="articleContent"><h3>'+ index + ' ' + articleObj.content.title_alt+'</h3></section>';

          $('#main').append(article_struct);
          $('.article').append(article_pic);
        });
       // $("ul").append(response.data.feed[0].content.title_alt);
      
      },
  });


             


//sample helper function
var help = models
help.hello("world")
