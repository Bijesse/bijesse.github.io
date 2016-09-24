//set global vars for width\height and set to window.innerWidth\innerHeight
var width = window.innerWidth;
var height = window.innerHeight;

//add url for usa.json
 	var url = "https://gist.githubusercontent.com/Bijesse/3bc074f9852d0380de5596b13de183da/raw/30a198b958b7a5e48cc9576e0b01809a786a329d/usa.json";

//use d3.select() to append an svg element to body and define a width\height
	var svg = d3.select("#map").append("svg").attr("width", width).attr("height", height);



//add a projection for d3.geo.albersUsa()
	var projection = d3.geo.albersUsa().scale(1070).translate([width / 2, height / 2]);


//add a geo path generator with it's projection method
var path = d3.geo.path().projection(projection);

//add a convenience method to pull in json data and populate the map
d3.json(url, function(err, us)  {
svg
	    .attr("id","states")
	    .selectAll("path")
	    .data(us.features)
	    .enter().append("path")
	    .attr("d",path)
      .attr("fill",function(d,i){
              if(d.properties.region === "South"){return "red"}
              else if(d.properties.region === "West"){return "blue"}
              else if(d.properties.region === "Midwest"){return "yellow"}
              else{return "green"}
            })
    .on("click", function(d){
        var wikiURL = d.properties.wikipedia;
        window.open(wikiURL, '_blank');
    });
});

console.log(width);
