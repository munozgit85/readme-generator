// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('../readme-generator/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Project Title? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please write project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'user',
        message: 'Please enter your github username?',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please enter the contribution requirements for this project',
        validate: contributeInput => {
          if (contributeInput) {
            return true;
          } else {
            console.log('Please enter contributors!');
            return false;
          }
        }
      },
      {
          type: 'input',
          name: 'test',
          message: 'Please write tests for your application. Then provide examples on how to run them here.',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please list the test for the application!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a description of the project (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'install',
          message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Provide instructions and examples for use. Include screenshots as needed.(Required)',
          validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('You need to enter usage instructions!');
              return false;
            }
          }
        },
        {
          type: 'checkbox', 
          name: 'license',
          choices: ["MIT", "GPLv3", "GPL"],
          message: 'Choose your License.'
      },
          {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
              if (linkInput) {
                return true;
              } else {
                console.log('You need to enter a project GitHub link!');
                return false;
              }
            }
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?'
        }
      ])
      .then(input => {
        return input;
    })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log('The README is completed !')
    })
}

// TODO: Create a function to initialize app
function init() {
    questions() // Prompt user to get input data
        .then(input => {
            return generateMarkdown(input);
        })
        .then(markdown => {
            writeToFile('./Develop/README.md', markdown);
        })
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init()