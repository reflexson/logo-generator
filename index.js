const inquirer = require('inquirer');
const fs = require('fs');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
const {Circle, Square, Triangle} = require('./lib/shapes.js')
const Svg = require('./lib/svg.js');

const questions = [
    {
        type: 'maxlength-input',
        name: 'letters',
        message: 'What letters would you like in your logo(Choose up to 3)?',
        maxLength: 3,
    },
     {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color name or hex number for the text of your logo',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color name or hex number for the shape of your logo',
    },
];

inquirer
    .prompt(questions)
    .then(answers =>{
        let shape;
        if(answers.shape==='circle'){
            shape = new Circle();
        }
        if(answers.shape==='square'){
            shape = new Square();
        }
        if(answers.shape==='triangle'){
            shape = new Triangle();
        }
        shape.setColor(answers.shapeColor);
        let svg = new Svg();
        svg.setShape(shape);
        svg.setText(answers.letters, answers.textColor)
        return fs.writeFileSync(`./Output/${answers.letters}_logo.svg`, svg.setLogo())})
        .then(err =>{err ? console.log(err) : console.log('Generated logo.svg. Check the Output folder!')})





\