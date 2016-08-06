var presidentObject = {
    presidents: [
        'Washington',
        'Adams',
        'Jefferson',
        'Madison',
        'Monroe',
        'Adams',
        'Jackson',
        'Van Buren',
        'Harrison',
        'Tyler',
        'Polk',
        'Taylor',
        'Fillmore',
        'Pierce',
        'Buchanan',
        'Lincoln',
        'Johnson',
        'Grant',
        'Hayes',
        'Garfield',
        'Arthur',
        'Cleveland',
        'Harrison',
        'Cleveland',
        'McKinley',
        'Roosevelt',
        'Taft',
        'Wilson',
        'Harding',
        'Coolidge',
        'Hoover',
        'Roosevelt',
        'Truman',
        'Eisenhower',
        'Kennedy',
        'Johnson',
        'Nixon',
        'Ford',
        'Carter',
        'Reagan',
        'Bush',
        'Clinton',
        'Bush',
        'Obama',
    ]
}

//jQuery solution
presidentObject.presidents.forEach(function (president) {
    $("#jquery-list").append("<option>" + president + "</option>")
})


//Handlebar Template append
var titleObj ={
    title: "US Presidents",
    description: "A JSD project",
}

//step 2: get template and compile using handlebars
var titleSource = $("#title-template").html();
var titleCompiled = Handlebars.compile(titleSource);

//step 3: pass compiled template JS object
var titleTemplate = titleCompiled(titleObj);

//step 4: append template to the DOM
$("#title").append(titleTemplate);

//President List Append

var presidentSource = $("#president-template").html();
var presidentCompiled = Handlebars.compile(presidentSource);
var presidentTemplate = presidentCompiled(presidentObject);

console.log(presidentTemplate);

$("#handlebars-list").append(presidentTemplate);





