// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    // Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project',
    },
    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions for your project',
    },
    //Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage instructions for your project',
    },
    // LICENSE OPTIONS
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for this project?',
        choices: ['Apache 2.0', 
                'Boost', 
                'BSD',
                'Creative Commons', 
                'Eclipse',
                'GNU',
                'IBM',
                'ISC',
                'MIT', 
                'Mozilla', 
                'Open Data Commons',
                'Perl',
                'SIL',
                'Unlicense',
                'N/A'],
    },
    // Constributing
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter the names of the people who contributed (names separated by commas)',
    },
    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'Enter the test instructions for your project',
    },
    // QUESTIONS SEGMENT
    {
        type: 'input',
        name: 'user',
        message: 'Enter your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => 
        err ? console.error(err) : console.log('Success!'));
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('myREADME.md', data)
        });
};

// Function call to initialize app
init();
