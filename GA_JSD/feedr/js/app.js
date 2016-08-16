/*
  Please add all Javascript code to this file.
*/

var open = [openDigg, openMash, openReddit];


//creates the items within the dropdown menu.
var dropdown = ["Digg", "Mashable", "Reddit"];
  $.each(dropdown, function(index, element){

    $('#drop').append('<li id=' + element + '><a href = "">' + element + '</a></li>');
    $('#' + element).click(function(e) {
      e.preventDefault();
      open[index](); 
      $('span').html(element);
    })

    
  });

//  Templating solution for appending 3 sources
// var source = $("#navHeader").html();
// var template = Handlebars.compile(source);

// var sites = { sites: ["Digg","Mashable", "Reddit"]  }
// var allSites = template(sites)
// $('#drop').append(allSites)


  //$('.container').click(function(){
  //  console.log('test')
  //  openMash();
//
  //})


var diggRequest = "https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json"
var mashRequest = "https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json"
var redditRequest = "https://www.reddit.com/top.json"

function openDigg(){
  $.ajax(
  {
      url: diggRequest,
      type: "GET",
      success: function (response){
        console.log(response.data.feed[0].content.title_alt);
        console.log(response.data.feed[0].content.media.images[0].original_url);

        $.each(response.data.feed, function(index, articleObj){
          var article_struct = '<article class="article">';
          var article_pic = '<section class="featuredImage">' +'<img src="'+articleObj.content.media.images[0].url+'" alt="" />' + '</section>';
          var article_content = '<section class="articleContent"> <a href ="'+articleObj.content.original_url+'"><h3>'+ index + ' ' + articleObj.content.title_alt+'</h3></a><h6>'+articleObj.content.domain+'</h6></section>';
          var impressions = '<section class="impressions">' + articleObj.diggs.count + '</section>'
          $('#main').append(article_struct + article_pic + article_content+impressions+'<div class="clearfix"></div></article>');
        });
       // $("ul").append(response.data.feed[0].content.title_alt);
      
      },
  });
}

function openMash(){
  $.ajax(
  {
    url: mashRequest,
    type: "GET",
    success: function (response){
     // console.log(response.new[0]);

      $.each(response.new, function(index, articleObj){
        var article_struct = '<article class="article">';
        var article_pic = '<section class="featuredImage">' +'<img src="'+articleObj.responsive_images[0].image+'" alt="" />' + '</section>';
        var article_content = '<section class="articleContent"> <a href ="'+articleObj.link+'"><h3>'+ index + ' ' + articleObj.title+'</h3></a></section>';
        var impressions = '<section class="impressions">' + articleObj.shares.total + '</section>'
        $('#main').append(article_struct + article_pic + article_content + impressions + '<div class="clearfix"></div></article>');
      });
    },
  });
}

function openReddit(){
  $.ajax(
  {
    url: redditRequest,
    type: "GET",
    success: function (response){
      console.log(response.data.children[1].data.preview.images[0].source.url);

      $.each(response.data.children[1], function(index, articleObj){
        var article_struct = '<article class="article">';  
        var article_pic = '<section class="featuredImage">' +'<img src="'+articleObj.data.preview.images[0].source.url+'" alt="" />' + '</section>';
        //console.log(articleObj.data)
        $('#main').append(article_struct + article_pic + '<div class="clearfix"></div></article>');

      })
    }
  });
}
//openDigg();
//openMash();
//openReddit()



//sample helper function
var help = models
help.hello("world")
