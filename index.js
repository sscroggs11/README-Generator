const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project :',
        },

        {
            type: 'input',
            name: 'description',
            message: 'Give a brief description about your project:',
        },


        {
            type: 'input',
            name: 'steps',
            message: 'What are the installation steps?',
        },

        {
            type: 'input',
            name: 'instructions',
            message: 'How do you use this application?',
        },

        {
            type: 'input',
            name: 'collaborators',
            message: 'Who are the collaborators for this project?',
        },

        {
            type: 'input',
            name: 'howtocontribute',
            message: 'How can other users contribute to this project?',
        },

        {
            type: 'list',
            name: 'license',
            message: 'Which license(s) are you using?',
            choices: ['MIT', 'MPL', 'Apache', 'EPL', 'N/A'],
        },

        {
            type: 'input',
            name: 'tests',
            message: 'What are the tests?',
        },

        {
            type: 'input',
            name: 'username',
            message: 'Enter your github username',
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
        },
    ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else {
        console.log('Success! README.md file is created.');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) => generateMarkdown(answers))
    .then((data) => writeToFile('README.md' ,data))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();