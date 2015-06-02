var name = 'Niyshia Tisdale'
var formattedName = HTMLheaderName.replace('%data%', name);

var role ='Web Developer'
var formattedRole = HTMLheaderRole.replace('%data%', role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

/*$('#header').prepend(bio.role);
$('#main').append(bio.mobile);
$('#main').append(bio.contacts.email);
$('#main').append(bio.bioPic);
$('#main').append(bio.welcomeMessage);
$('#main').append(bio.skills);*/


var bio = {
    'name' : 'Niyshia Tisdale',
    'role' : 'Web Developer',
    'contacts' : {
      'email' : 'niyshia@gmail.com',
      'mobile' : '919-675-1158',
      'github' : 'Niyshia',
      'location' : 'Raleigh'
    },
    'bioPic' : 'images/pf_1.jpg',
    'welcomeMessage' : 'Hi! Thank you for stopping by to view my work and resume.',
    'skills' : ['HTML5', 'CSS', 'JS']
    };

if (bio.skills.length > 0) {

  $('#header').append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
  $('skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
  $('skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
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
education['major'] = 'Bachelor of Science - Double Major in Business Admininstration and Computer Information Systems, 2008';
education['onlineCourses'] = 'Front End Web Developer, Nanodegree, 2015';



