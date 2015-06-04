var bio = {
    'name' : 'Niyshia Tisdale',
    'role' : 'Web Developer',
    'contacts' : [
      {
        'email' : 'niyshia@gmail.com',
        'mobile' : '919-675-1158',
        'github' : 'niyshia',
        'location' : 'Raleigh'
      }
      ],
    'bioPic' : 'images/pf_1.jpg',
    'welcomeMessage' : 'Hi! Thank you for stopping by to view my work and resume.',
    'skills' : ['HTML5', 'CSS', 'JS']
    }

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').append(formattedBioPic);
$('#header').append(formattedMessage);

if (bio.skills.length > 0) {

  $('#header').append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
  $('#skills').append(formattedSkill);
}

if (bio.contacts.length > 0) {

  var formattedBioLocation = HTMLlocation.replace('%data%', bio.contacts[0].location);
  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts[0].mobile);
  var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts[0].github);
  var formattedEmail = HTMLemail.replace('%data%', bio.contacts[0].email);

  $('#topContacts:last').prepend(formattedBioLocation);
  $('#topContacts:last').prepend(formattedMobile);
  $('#topContacts:last').prepend(formattedGitHub);
  $('#topContacts:last').prepend(formattedEmail);
}

var work = {
  'jobs' : [
    {
      'employer' : 'Fidelity Investments',
      'title' : 'Software Systems Analyst',
      'dates' : 'October 2012 - Present',
      'location' : 'Durham, NC',
      'description' : 'Facilitate discussions between the development and business teams to capture business requirements, stories, use cases,' +
      'business flows and acceptance criteria.Support the team through the Agile project lifecycle including requirements, development,' +
      'testing/quality assurance and production release. Assists in evaluating design of new and existing systems to judge their' +
      'functionality, effectiveness, reliability, performance, usage, maintainability and cost of ownership.Executes analysis for' +
      'medium to large, projects with moderate oversight, recommend modifications to designs for achieving priority business requirements.' +
      'Document objectives, use cases, requirements, stories, workflows, product specs as determined by each project. Traces specifications' +
      'from requirements to objectives. Recommends changes to existing systems design to achieve requirements.'
    },

     {
      'employer' : 'Fidelity Investments',
      'title' : 'Software Quality Assurance Engineer',
      'dates' : 'July 2009 - October 2012',
      'location' : 'Durham, NC',
      'description' : 'Facilitate discussions between the development and business teams to capture business requirements, stories, use cases,' +
      'business flows and acceptance criteria.Support the team through the Agile project lifecycle including requirements, development,' +
      'testing/quality assurance and production release. Assists in evaluating design of new and existing systems to judge their' +
      'functionality, effectiveness, reliability, performance, usage, maintainability and cost of ownership.Executes analysis for' +
      'medium to large, projects with moderate oversight, recommend modifications to designs for achieving priority business requirements.' +
      'Document objectives, use cases, requirements, stories, workflows, product specs as determined by each project. Traces specifications' +
      'from requirements to objectives. Recommends changes to existing systems design to achieve requirements.'
    },
  ]
};

function displayWork() {

  for (job in work.jobs) {
  $('#workExperience').append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
  var formattedDesc = HTMLworkDescription.replace('%data%', work.jobs[job].description);
  var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location)

  $('.work-entry:last').append(formattedEmployerTitle);
  $('.work-entry:last').append(formattedDates);
  $('.work-entry:last').append(formattedDesc);
  $('.work-entry:last').prepend(formattedLocation);
  }
}

displayWork();
/*$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});*/

var portfolio = {
  'projects' : [
    {
      'projectTitle' : 'Niyshia Tisdale',
      'projectDates' : 'Web Developer',
      'projectDescription' : 'test',
      'projectImages' : 'niyshia@gmail.com'
    },

    {
      'projectTitle' : 'Niyshia Tisdale',
      'projectDates' : 'Web Developer',
      'projectDescription' : 'test',
      'projectImages' : 'niyshia@gmail.com'
    }
  ]
}
var education = {};
education['schoolName'] = 'North Carolina Wesleyan College';
education['yearsAttended'] = '2004 - 2008';
education['schoolCity'] = 'Morrisville, NC';
education['degree'] = 'Bachelor of Science - Double Major in Business Admininstration and Computer Information Systems, 2008';
education['onlineCourses'] = 'Front End Web Developer, Nanodegree, 2015';

$('#education').append(HTMLschoolStart);

var formattedSchoolName = HTMLschoolName.replace('%data%', education.schoolName);
var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.degree);

$('.education-entry:first').prepend(formattedSchoolName);
$('.education-entry').append(formattedSchoolDegree);


function inName () {
    var name = window.name;
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();

    // Don't delete this line!
    return name[0] +" "+name[1];
}
var name = $(bio['name']).text();
// Did your code work? The line below will tell you!
$('#main').prepend(internationalizeButton);
