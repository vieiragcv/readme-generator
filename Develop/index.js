/*-------------------------------------------------------------------- 
-                              PACKAGES 
--------------------------------------------------------------------*/ 

const inquirer = require('inquirer');
const fs = require('fs');

/*-------------------------------------------------------------------- 
-                              ARRAYS
--------------------------------------------------------------------*/ 

const questions = [ // will be used to refactor prompt questions
  'Project Name: ',
  'Project Description: ',
  'Installation Instructions: ',
  'Usage Information: ',
  'Contribution Guidelines: ',
  'Test Instructions: ',
];

/*-------------------------------------------------------------------- 
-                             WRITE FILES
--------------------------------------------------------------------*/ 

function writeToFile(fileName, data) {

};

/*-------------------------------------------------------------------- 
-                             APPLICATION
--------------------------------------------------------------------*/ 

const init = readMeData => {
  dataArr = [];
  console.log(`
  =================
    Create ReadMe 
  =================
  `);
  return inquirer.prompt([

    /* --- QUESTION 1: PROJECT NAME ---*/
    {
      type: 'input',
      name: 'projName',
      message: 'Project Name: ',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } 
        else {
          console.log('Project name is mandatory!');
          return false;
        }
      }
    },

    /* --- QUESTION 2: PROJECT DESCRIPTION ---*/
    {
      type: 'input',
      name: 'projDescription',
      message: 'Project Description: ',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } 
        else {
          console.log('Provide a brief description of your project: ');
          return false;
        }
      }
    },

    /* --- QUESTION 3: INSTALL INSTRUCTIONS ---*/
    {
      type: 'input',
      name: 'projInstallInst',
      message: 'Installation Instructions: ',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } 
        else {
          console.log('Project name is mandatory!');
          return false;
        }
      }
    },

    /* --- QUESTION 4: USAGE INFO ---*/
    {
      type: 'input',
      name: 'projUsageInfo',
      message: 'Usage Information: ',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } 
        else {
          console.log('Usage information is required!');
          return false;
        }
      }
    },

    /* --- QUESTION 5: CONTRIBUTION GUIDELINES  ---*/
    {
      type: 'input',
      name: 'projContGuide',
      message: 'Contribution Guidelines: ',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } 
        else {
          console.log('Contribution guidelines are required!');
          return false;
        }
      }
    },
    
    /* --- QUESTION 6: TEST INSTRUCTIONS  ---*/
    {
      type: 'input',
      name: 'projTest',
      message: 'Test Instructions: ',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } 
        else {
          console.log('Test instructions are required!');
          return false;
        }
      }
    },
    
    /* --- QUESTION 7: LICENSES ---*/
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },

    /* --- QUESTION 8: GitHub USERNAME  ---*/
    {
      type: 'input',
      name: 'github',
      message: 'Enter your Github Username (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } 
        else {
          console.log('Please enter your github username!');
          return false;
        }
      }
    },

     /* --- QUESTION 9: EMAIL  ---*/
     {
      type: 'input',
      name: 'email',
      message: 'Enter your email: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } 
        else {
          console.log('Please enter your email!');
          return false;
        }
      }
    }
  ])
  .then(inputData => {
    //console.log(inputData);
    dataArr.push(inputData);
    console.log(dataArr);
    return dataArr;
  });
};

/*-------------------------------------------------------------------- 
-                          CALL APPLICATION
--------------------------------------------------------------------*/ 

init();

