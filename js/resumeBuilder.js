 var name= "Amanda Waremburg";
 var role= "Freelance Web Developer";
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

var bio = {
	"name": "Amanda Waremburg",
	"role": "Web Developer",
	"contact": {
		"mobile": "309-838-5287",
		"email": "snowamanda92@gmail.com"
	},
	"skills": ["organization", "detail-oriented", "efficiency"],
	"picture": "images/me.jpg",
	"welcome": "Welome to my Web Developer resume! Feel free to take a look around and contact me with any questions."
};

var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
$("#header").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
$("#header").append(formattedEmail);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
$("#header").append(formattedWelcome);
var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(formattedPic);

if (bio.skills.length) {
	$("#header").append(HTMLskillsStart);
	for (var skill in bio.skills) {
		var formattedSkill1 = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill1);
	}
}

var work = {
	"jobs": [
		{
			"employer": "Self",
			"position": "Beginner Web Developer",
			"years": "July 2015 - Present",
			"city": "Tremont, IL",
			"description": "Learning to develop Web sites, immplementing knowledge to develop sites for local organizations, creating and enhancing Web sites"
		},
		{
			"employer": "Busey Bank",
			"position": "Mortgage Post Closer",
			"years": "April 2014 - August 2015",
			"city": "Peoria, IL ",
			"description": "Filed documents, balanced loans, made corrections, cleared pend items, pursued the funding of loans"
		}
	]
};

// function locationizer(work_obj) {
// 	var CityArray = [];
// 	for (var idx in work_obj.jobs) {
// 		CityArray.push(work_obj.jobs[idx].city);
// 	}
// 	return CityArray;
// }

function displayWork() {
	for (var idx in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[idx].employer);
		var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[idx].position);
		$(".work-entry:last").append(formattedEmployer + formattedPosition);

		var formattedYears = HTMLworkDates.replace("%data%", work.jobs[idx].years);
		$(".work-entry:last").append(formattedYears);

		var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[idx].city);
		$(".work-entry:last").append(formattedCity);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[idx].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

	// var formattedSkill1 = HTMLskills.replace("%data%", bio.skills[0]);
	// $("#skills").append(formattedSkill1);
	// var formattedSkill2 = HTMLskills.replace("%data%", bio.skills[1]);
	// $("#skills").append(formattedSkill2);
	// var formattedSkill3 = HTMLskills.replace("%data%", bio.skills[2]);
	// $("#skills").append(formattedSkill3);


 var formattedPosition = HTMLworkTitle.replace("%data%", work.position);
 var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
 var formattedYears = HTMLworkDates.replace("%data%", work.years);
 var formattedCity = HTMLworkLocation.replace ("%data%", work.city);

//$("#header").append(formattedPosition);
//$("#workExperience").append(formattedEmployer);
//$("#workExperience").append(formattedYears);
//$("#workExperience").append(formattedCity);


var education = {
	"schools": [
		{
			"name": "Parkland College",
			"degree": "AAS",
			"city": "Champaign"
		},
		{
			"name": "Eastern Illinois University",
			"years": 2,
			"degree": "BA",
			"city": "Charleston, IL"
		}
	]
}

var project = {};
project.title = " ";
project.description = " ";
project.image = " "

// var formattedName = HTMLschoolName.replace("%data%", education.name);
// var formattedYears = HTMLschoolDates.replace("%data%", education.years);
// var formattedCity = HTMLschoolLocation.replace("%data%", education.city);

// $("#header").append(formattedName);
//$("#education").append(formattedYears);
//$("#education").append(formattedCity);



//var awesomeThoughts = "I am Amanda and I am (kind of) AWESOME!";
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME", "fun");
//$("#main").append(funThoughts);
/*
This is empty on purpose! Your code to build the resume will go here.
 */

$(document).click(function(loc) {
	logClicks(loc.pageX,loc.pageY);
});

$("#main").append(internationalizeButton);

function inName (full_name) {
	var firstName = full_name.split(" ")[0];
	var lastName = full_name.split(" ")[1];
	firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
	lastName = lastName.toUpperCase();
	return firstName + " " + lastName;
}