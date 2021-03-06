// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for the README?",
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('Enter a README title');
                return false;
            }
        }
    },

    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },

    {
        type: "input",
        name: "repository",
        message: "What is your Github repository name?"   
    },

    {
        type: "input",
        name: "description",
        message: "Enter a summary.",
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Enter a description');
                return false;
            }
        }
    },

    {
        type: "input",
        name: "installation",
        message: "What is the installation and operating process?",
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log('Enter installation instructions');
                return false;
            }
        }  
    },

    {
        type: "input",
        name: "useCase",
        message: "What is your application for?"
    },

    {
        type: "input",
        name: "features",
        message: "What are the features of the application?"
    },

    {
        type: "input",
        name: "contributions",
        message: "Who contributed?"
    },

    {
        type: "list",
        message: "Which licenses are you using?",
        name: "licenses",
        choices: [
            "None",
            "Apache",
            "Academic",
            "GNU",
            "MIT",
            "Mozilla",
            "W3C"
        ]
    },

    {
        type: "input",
        name: "testing",
        message: "What is the testing process?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
];

// TODO: Create a function to write README file
function init() {
    inquirer.prompt(questions).then(function(userInput){

        const markdownString = generateMarkdown(userInput)

        fs.writeFile('README.md', markdownString, function(err) {
            if(err) {
                console.log(err)
            }
            else {
                console.log('README generated.')
            }
        })
    },

    )}

// TODO: Create a function to initialize app

// Function call to initialize app
init();
