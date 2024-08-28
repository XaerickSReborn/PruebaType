import {Customer} from "./crm/domain/model/customer";

let customer = new Customer(1,"Eric","Open Source");

console.log('Gracias 💙 ' + customer.name + ' y tu id es ' + customer.id)
console.log('Perteneces al curso de ' + customer.course)
