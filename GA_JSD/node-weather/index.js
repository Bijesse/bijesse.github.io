var express = require('express');
var path = require('path');
var faker = require('faker');
var request = require('request');

var app = express();

//tells app where assets are stored (for us it's in public)
app.use(express.static('public'));

//listening for get requests to the root of our application
app.get('/', function (req, res) {
   res.send('index.html');
 });

// //when app gets a get request this function will run.. when you add /geo to the url it now says 'I am working'
//  app.get('/geo', function (req, res) {
//     res.send('I am working!');
//   });

  app.get('/geo', function (req, res) {

    var latitude = faker.address.latitude();
    var longitude = faker.address.longitude();

    var weatherKey = 'e83b3c4c08285bf87b99f9bbc0abe3f0';
    var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + weatherKey;

    request(weatherURL, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send({
          weather: JSON.parse(body),
          lat: latitude,
          lng: longitude,
        });
      }
    });
 });

//turns on our server
app.listen(1337, function () {
   console.log('The magic is going down on 1337!');
 });
