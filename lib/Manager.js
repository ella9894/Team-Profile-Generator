const Employee = require('./Employee');

class Manager extends Employee { 
    constructor(name = '') {
        super(name);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        
    }
    getRole() {
        //returns Manager
    }
}

module.exports = Manager;