//Bio Section
var bio = {
  "name" : "Niyshia Tisdale",
  "role" : "Web Developer",
  "contacts" : {
    "email" : "niyshia@gmail.com",
    "mobile" : "919-675-1158",
    "github" : "Niyshia",
    "location" : "Raleigh"
  },
  "bioPic" : "images/bp.jpg",
  "welcomeMessage" : "Hi! Thank you for stopping by to view my work and resume.",
  "skills" : ["HTML5", "CSS", "JS"]
};

bio.display = function () {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedBioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

  $("#header").prepend(formattedName, formattedRole, formattedBioPic, formattedMessage);
  $("#topContacts").append(formattedMobile, formattedGitHub, formattedEmail, formattedBioLocation);
  $("#footerContacts").append(formattedMobile, formattedGitHub, formattedEmail, formattedBioLocation);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function (skill) {
      var formattedSkill = HTMLskills.replace("%data%", skill);
      $('#skills').append(formattedSkill);
    });
  }
}


//Work Experience Section
var work = {
  "jobs" : [
    {
      "employer" : "Fidelity Investments",
      "title" : "Software Systems Analyst",
      "dates" : "October 2012 - Present",
      "location" : "Durham, NC",
      "description" : "Facilitate discussions between the development and business teams to capture business requirements, stories, use cases," +
      "business flows and acceptance criteria.Support the team through the Agile project lifecycle including requirements, development," +
      "testing/quality assurance and production release. Assists in evaluating design of new and existing systems to judge their" +
      "functionality, effectiveness, reliability, performance, usage, maintainability and cost of ownership.Executes analysis for" +
      "medium to large, projects with moderate oversight, recommend modifications to designs for achieving priority business requirements." +
      "Document objectives, use cases, requirements, stories, workflows, product specs as determined by each project. Traces specifications" +
      "from requirements to objectives. Recommends changes to existing systems design to achieve requirements."
    },

     {
      "employer" : "Fidelity Investments",
      "title" : "Software Quality Assurance Engineer",
      "dates" : "July 2009 - September 2012",
      "location" : "Durham, NC",
      "description" : "Develop test plans working with test leads, User Acceptance Testing Analysts, Implementation Managers, Project Managers, Lines of Business, IT/IS, and users."+
      "Develop test cases and test scripts/procedures from requirement documentation, specification documentation and/or business scenarios."
    },
  ]
};

work.display = function() {
  work.jobs.forEach (function (job) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedDesc = HTMLworkDescription.replace("%data%", job.description);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDesc);
    $(".work-entry:last").prepend(formattedLocation);
  });
}
//Projects Section
var projects = {
  "projects" : [
    {
      "title" : "Intro Project: HTML5 Hello World!",
      "dates" : "April 2015",
      "description" : "Intro project to familiarize myself with GitHub, HTML, CSS, and create a webpage",
      "images" : ["images/introproject.png"]
    },

    {
      "title" : "P1: Build a Portfolio Site",
      "dates" : "May 2015",
      "description" : "test",
      "images" : ["images/pf_1.jpg"]
    },
  ]
}

projects.display = function() {
  projects.projects.forEach(function(project){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
    if (project.images.length > 0) {
      project.images.forEach(function(image){
        var formattedImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedImage);
      });
    }
  })
};

//Education Section
var education = {
  "schools" : [
    {
      "name" : "North Carolina  Wesleyan College",
      "dates" : "2004 - 2008 ",
      "location" : "Morrisville, NC",
      "degree" : " Bachelor of Science",
      "major" : "Double Major in Business Admininstration and Computer Information Systems",
      "url" : "www.nwcw.edu"
    },

    {
      "name" : "North Carolina Central University",
      "dates" : "1998 - 2002",
      "location" : "Durham, NC",
      "degree" : "n/a",
      "major" : "Nursing",
      "url" : "www.nccu.edu"
    },
  ],
  "onlineCourses" : [
    {
      "title" :"Front End Web Developer, Nanodegree",
      "dates" : 2015,
      "school" :"Udacity",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
}

education.display = function(){
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);

    $(".education-entry:last").append(formattedSchoolName, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
    $(".education-entry:last a").append(formattedSchoolDegree);
  });

  if (education.onlineCourses.length > 0) {
    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function (course) {
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
      var formattedSchoolUrl = HTMLonlineURL.replace("%data%", course.url);


      $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates);
    });
  }
};

bio.display();
work.display();
projects.display();
education.display();

function inName() {
    var name = $("#name").html();
    name = name.trim().split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}
$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);
