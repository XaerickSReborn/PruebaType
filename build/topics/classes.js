"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Astronauta = exports.Person = void 0;
class Person {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this._age = age;
        this._fullName = `${this.name} ${this.lastname}`;
    }
    walk() {
        console.log(`${this.name} esta caminando`);
    }
    talk() {
        console.log(`${this.name} esta hablando: 
        "Naci en el año ${this._yearBirth()}"`);
    }
    _yearBirth() {
        const currentDate = new Date();
        const yearBirth = currentDate.getFullYear() - this._age;
        return yearBirth;
    }
}
exports.Person = Person;
class Astronauta extends Person {
    constructor(name, lastname, age, numberMastersDegrees) {
        super(name, lastname, age);
        this.numberMastersDegrees = numberMastersDegrees;
    }
    pilotShip() {
        console.log(`${this._fullName} Si puede pilotear`);
    }
    getFullName() {
        return this._fullName;
    }
}
exports.Astronauta = Astronauta;
