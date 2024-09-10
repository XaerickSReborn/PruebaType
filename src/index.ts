import {Customer} from "./crm/domain/model/customer";
//import './topics/basics';
//import './topics/Interfaces_Object';
//import './topics/arrays';
import './topics/genericTypes'
import { Person, Astronauta } from "./topics/classes";
import { ICustomer,showCustomerData } from "./topics/imports_exports.ts/importExports";

const customer:ICustomer={
    name:'PEDRO',
    lastname:'CASTILLO',
    email:'castillo@gmail.com',
    address:{description:'CHICLAYO', city:'Lima',country:'Chile'}
}

showCustomerData(customer)

const Karla = new Person('Karla','SARAGOZA',19)
console.log('Instancia (Person) "Karla: " ', Karla)

Karla.walk()
Karla.talk()

console.log('------------------------')
console.log('--------Datos Astronauta----------')

const astronauta = new Astronauta('Felipe','Castro',20,2)
console.log('Datos del Astronauta: ',astronauta)
console.log('Su nombre completo: ',astronauta.getFullName())
astronauta.pilotShip()
console.log('------------------------')
console.log('------------------------')
console.log('------------------------')

//let customer = new Customer(1,"Eric","Open Source");


//console.log('Gracias 💙 ' + customer.name + ' y tu id es ' + customer.id)
//console.log('Perteneces al curso de ' + customer.course)