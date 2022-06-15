const inquirer = require('inquirer');
const fs = require('fs');
const Team = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the team manager's name. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID. (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter work email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter work email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Enter the team manager's office number. (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter work email address!");
                    return false;
                }
            }
        },
        
    ]);
}

const createTeam = () => {
    inquirer.prompt([
        {
            type: 'checkbox',
            name: 'add',
            message: "Please choose from the following options.",
            choices:['Add an Engineer','Add an Intern','Create Team']
        },
    ]).then(response => {
        switch (response) {
            case 'Add an Engineer': getEngineer();
                break;
            case 'Add an Intern': getIntern();
                break;
            case 'Create Team': FinishTeam();
        }
    })
}

const getEngineer=() => {
    inquirer.prompt([
        { 
            type: 'input',
            name: 'name',
            message: "Enter the Engineer's name.(Required)"
        },
        { 
            type: 'input',
            name: 'name',
            message: "Enter the Engineer's name.(Required)"
        },
    ])
}
    

promptManager();