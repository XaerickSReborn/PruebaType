"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showCustomerData = void 0;
const showCustomerData = (customer) => {
    console.log('DATOS DEL CLIENTE');
    const { name, lastname, email, address: { description, city, country } } = customer;
    console.log('Nombre: ', name);
    console.log('Apellido: ', lastname);
    console.log('Email: ', email);
    console.log('---DIRECCION---');
    console.log('Direccion: ', description);
    console.log('Ciudad: ', city);
    console.log('Pais: ', country);
};
exports.showCustomerData = showCustomerData;
