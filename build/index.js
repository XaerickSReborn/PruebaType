"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./crm/domain/model/customer");
let customer = new customer_1.Customer(1, "Eric", "Open Source");
console.log('Gracias 💙 ' + customer.name + ' y tu id es ' + customer.id);
console.log('Perteneces al curso de ' + customer.course);
