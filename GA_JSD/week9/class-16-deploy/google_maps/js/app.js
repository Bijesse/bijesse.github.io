$(document).ready(function() {
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7128, lng: -74.0059},
      zoom: 13
    });
  }
  initMap();

//Mapping cityhall and home
  // var cityhall = new google.maps.Marker({
  //   position: {
  //     lat: 40.7128,
  //     lng: -74.0059,
  //   },
  //   map: map,
  //   title: "city Hall"
  // });
  //
  // var home = new google.maps.Marker({
  //   position: {
  //     lat: 40.710315,
  //     lng: -73.9548747,
  //   },
  //   map: map,
  //   title: "home"
  // });

var citiUrl = "http://api.citybik.es/citi-bike-nyc.json";
  $.ajax(
   {
      url: citiUrl,
      type: "GET",
      success: function (response){
        zero(response);
      },
      error: function (response) {
        console.log(response);
      }

    });


    function zero (response){
      response.forEach(function(item, index) {
    var terminal = new google.maps.Marker({
      position: {
        lat: item.lat / 1000000,
        lng: item.lng / 1000000,
      },
        map: map,
        title: item.name
    });
  //Event listener for the terminal clicked
          google.maps.event.addListener(terminal,'click',function() {
          //  terminal.addListener('click', function() {
              infowindow.open(map, terminal);
        //});
    //map.setZoom(18);
    //map.setCenter(terminal.getPosition());
    });

    var bikeContent = '<div>'+ item.name +'</div>' + '<div>'+ 'bikes at station: '+ item.bikes +'</div>' + '<div>'+ 'open spots at station: '+ item.free +'</div>';
  //generate info window
    var infowindow = new google.maps.InfoWindow({
              content: bikeContent,
            });

});

    }

});
