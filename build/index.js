"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import './topics/basics';
//import './topics/Interfaces_Object';
//import './topics/arrays';
require("./topics/genericTypes");
const classes_1 = require("./topics/classes");
const importExports_1 = require("./topics/imports_exports.ts/importExports");
const customer = {
    name: 'PEDRO',
    lastname: 'CASTILLO',
    email: 'castillo@gmail.com',
    address: { description: 'CHICLAYO', city: 'Lima', country: 'Chile' }
};
(0, importExports_1.showCustomerData)(customer);
const Karla = new classes_1.Person('Karla', 'SARAGOZA', 19);
console.log('Instancia (Person) "Karla: " ', Karla);
Karla.walk();
Karla.talk();
console.log('------------------------');
console.log('--------Datos Astronauta----------');
const astronauta = new classes_1.Astronauta('Felipe', 'Castro', 20, 2);
console.log('Datos del Astronauta: ', astronauta);
console.log('Su nombre completo: ', astronauta.getFullName());
astronauta.pilotShip();
console.log('------------------------');
console.log('------------------------');
console.log('------------------------');
//let customer = new Customer(1,"Eric","Open Source");
//console.log('Gracias 💙 ' + customer.name + ' y tu id es ' + customer.id)
//console.log('Perteneces al curso de ' + customer.course)
