/*

Virtual Farm

Goal: You'll be creating a virtual farm whose animals can be clicked on to get an alert displaying their name and what sound they make

Instructions:

1) Create a top-level "FarmAnimal" object that all the other farm animals will inherit from
2) FarmAnimal must have "name", "sound", and "image" instance props, and a "talk" instance method (talk should alert the animal's name and its sound)
3) Create at least three different animals for your farm (remember to inherit from "FarmAnimal" by changing the "prototype" of your animals)

	- Give each animal a name, a sound, and an image (use the web and copy an image path)

4) Once you build your animal constructors, create an instance of each animal and push that instance into the "farmAnimals" array

	ex:

	new rooter = new Rooster('Roger');
	farmAnimals.push(rooster);

5) Lastly, iterate over the "farmAnimals" array and append each of your animals to the DOM
	- You will have to create a new DOM element (a <div> is recommended)
	- This new <div> needs to have the CSS class "animal"
	- Assign this <div> random "bottom" and "left" attributes (this is so animals do not overlap each other in the DOM)

		Hint: use %-based values (bottom: 50%; left: 25%)

	- This <div>'s background should be the animal's image

		Hint: background-image: url('http://some-url-here.com')

	- Each <div> should have a click event that alerts the name of the animal and the sound that it makes
	- Append each new <div> to the body

		Hint: $('body').append(yourElement)
*/


$(document).ready(function () {

	// push all animal instances here
	var farmAnimals = [];

//object constructor
function FarmAnimal (name, sound, image){
	this.name = name;
	this.sound = sound;
	this.image = image;
	this.talk = function(){
		console.log("Hi I am " + name + " I say "+ sound);
	}
}

//instances
function Cat (name, sound, image){
	FarmAnimal.call(this, name, sound, image)
}

function Pig (name, sound, image){
	FarmAnimal.call(this, name, sound, image)
}

function Spider (name, sound, image){
	FarmAnimal.call(this, name, sound, image)
}

//prototype?
var cat = new Cat('piper', 'meow', 'http://www.cutecatgifs.com/wp-content/uploads/2015/07/Cat-slots.gif')
var pig = new Pig('wilbur', 'snort', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/pig-full-body.jpg.adapt.945.1.jpg')
var spider = new Spider('charlotte', 'words', 'http://www.telegraph.co.uk/content/dam/news/2016/04/27/BMMPYM-redback-large_trans++eo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg')


cat.talk();
pig.talk();
spider.talk();

//pushing new var to array
farmAnimals.push(cat);
farmAnimals.push(pig);
farmAnimals.push(spider);
console.log(farmAnimals)

//appending images to html
$("body").append("<img class='animal' id='cat' src ="+farmAnimals[0].image+">");
$("body").append("<img class='animal' id='pig' src ="+farmAnimals[1].image+">");
$("body").append("<img class='animal' id='spider' src ="+farmAnimals[2].image+">");

$("#cat").css("top", "200px");
$("#pig").css("top", "300px");
$("#spider").css("top", "400px");

//moves the cat
$("body").keydown(function(event) {

if (event.which === 38) {
        
        $("#cat").css("top", $("#cat").offset().top - 20);
    }
    else if (event.which === 40) {
        
        $("#cat").css("top", $("#cat").offset().top + 20);
    }
    else if (event.which === 37) {
        
        $("#cat").css("left", $("#cat").offset().left - 20);
    }
    else if (event.which === 39) {
        
        $("#cat").css("left", $("#cat").offset().left + 20);
    }

  });
});
