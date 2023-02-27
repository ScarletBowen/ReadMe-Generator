// packages needed
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
      },
    {
      type: 'list',
      name: 'license',
      message: 'What license does your project require?',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'Linkedin username',
        message: 'What is your Linkedin username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
  ];

//   .then((data) => {
//     const answers = generateMarkdown(data);
    
//     fs.writeFile('./generateREADME.md', data, (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });

function init() {
    inquirer.prompt(questions).then((data) => {
        fs.writeFile('README.md', generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
        );
    }
    );
}

init();
module.exports = questions;