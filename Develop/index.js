// TODO: Include packages needed for this application: DONE
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input: DONE
// no inquirer.prompt?
const questions = [{
    type: 'input',
    name: 'Title',
    message: 'What do you call your project?'
},
{
    type: 'input',
    name: 'Description',
    message: 'Give a detailed, but still pretty short, description of your project'
},
// {
//     type: 'input',
//     name: 'TableOfContents',
//     message: 'Table of Contents - (Press Enter)'
// },
{
    type: 'input',
    name: 'Installation',
    message: 'What dependencies did you install for this project?'
},
{
    type: 'input',
    name: 'Usage',
    message: 'What are the steps do we need to take to use this app?'
},
{
    type: 'confirm',
    name: 'License',
    message: 'Does your project need a license?'
},
{
    type: 'list',
    name: 'LicenseType',
    message: 'Which license, or licenses, are needed for this project?',
    choices: ['MIT', 'Apache', 'Boost', 'BDS 3-Clause', 'None']
},
{
    type: 'input',
    name: 'Contributions',
    message: 'Who else contributed to this project? We know it was not just you'
},
{
    type: 'input',
    name: 'Tests',
    message: 'How did you test your app?'
},
{
    type: 'input',
    name: 'Github',
    message: 'What is your GitHub username?'
},
{
    type: 'input',
    name: 'Email',
    message: 'What is your email address?'
}];

// TODO: Create a function to write README file
// what about a .then?
// why did Jacob create a variable rather than a function? Or did he basically do both? Create a function and store it in a variable?
//and what do the two arguments represent here?
const writeToFile = (fileName, data) => {
    // what do fileName, data, and function(err) represent? Like what to create, what to load in there, and what to do if an error is thrown?
    fs.writeFile(fileName, data, function(err) {
        // do we even need this console log? 
        //console.log(data),
        err ? console.log(err) : console.log("You did it this a README.md file!")
    })

}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        // do we need this console log either? 
        //console.log(data)
    })
}

// Function call to initialize app
init();
